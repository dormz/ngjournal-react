# Run EF database update. Uses default instance (MSSQLSERVER) from appsettings when no named instance port is found.
$ErrorActionPreference = "Stop"
$Database = "NewGenJournalDb_Dev"
$ApiProjectPath = Join-Path $PSScriptRoot "..\NewGenJournal.API\NewGenJournal.API.csproj"

# Try to find a named instance's TCP port from registry (optional; appsettings use default instance)
$instanceNamesKey = "HKLM:\SOFTWARE\Microsoft\Microsoft SQL Server\Instance Names\SQL"
$port = $null
if (Test-Path $instanceNamesKey) {
    $instances = Get-ItemProperty $instanceNamesKey -ErrorAction SilentlyContinue
    $instanceNames = $instances.PSObject.Properties | Where-Object { $_.Name -notmatch '^PS' } | Select-Object -ExpandProperty Name
    foreach ($in in $instanceNames) {
        if ($in -eq 'MSSQLSERVER') { continue }
        $instanceId = $instances.$in
        $tcpPath = "HKLM:\SOFTWARE\Microsoft\Microsoft SQL Server\$instanceId\MSSQLServer\SuperSocketNetLib\Tcp\IPAll"
        if (Test-Path $tcpPath) {
            $tcp = Get-ItemProperty $tcpPath -ErrorAction SilentlyContinue
            $p = $tcp.TcpPort; if ([string]::IsNullOrWhiteSpace($p)) { $p = $tcp.TcpDynamicPorts }
            if ($p) { $port = $p; Write-Host "Using named instance $in on port $port" -ForegroundColor Green; break }
        }
    }
}

$env:ASPNETCORE_ENVIRONMENT = "Development"
Set-Location (Join-Path $PSScriptRoot "..")

if ($port) {
    $connStr = "Server=127.0.0.1,$port;Database=$Database;Trusted_Connection=True;TrustServerCertificate=True"
    & dotnet ef database update --project $ApiProjectPath --startup-project $ApiProjectPath --connection $connStr
} else {
    & dotnet ef database update --project $ApiProjectPath --startup-project $ApiProjectPath
}
