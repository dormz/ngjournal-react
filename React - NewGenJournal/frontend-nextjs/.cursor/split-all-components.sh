#!/usr/bin/env bash
# Split llms-full.txt into one topic file per Ant Design component (lines 676-9456)
# Skip "Components Overview" (4145-4153). Source: llms-full.txt
cd "$(dirname "$0")"
SRC=llms-full.txt

split_range() { sed -n "$1,$2p" "$SRC" > "antdesign-$3.txt"; }

split_range 676 757 watermark
split_range 758 980 upload
split_range 981 1154 typography
split_range 1155 1321 treeselect
split_range 1322 1474 tree
split_range 1475 1584 transfer
split_range 1585 1660 tour
split_range 1661 1775 tooltip
split_range 1776 1853 timeline
split_range 1854 1994 timepicker
split_range 1995 2075 tag
split_range 2076 2180 tabs
split_range 2181 2605 table
split_range 2606 2674 switch
split_range 2675 2763 steps
split_range 2764 2843 statistic
split_range 2844 2913 splitter
split_range 2914 2972 spin
split_range 2973 3066 space
split_range 3067 3153 slider
split_range 3154 3247 skeleton
split_range 3248 3481 select
split_range 3482 3554 segmented
split_range 3555 3599 result
split_range 3600 3657 rate
split_range 3658 3777 radio
split_range 3778 3861 qrcode
split_range 3862 3950 progress
split_range 3951 4010 popover
split_range 4011 4074 popconfirm
split_range 4075 4144 pagination
split_range 4154 4318 notification
split_range 4319 4556 modal
split_range 4557 4703 message
split_range 4704 4862 menu
split_range 4863 4949 mentions
split_range 4950 5015 masonry
split_range 5016 5137 list
split_range 5138 5269 layout
split_range 5270 5378 inputnumber
split_range 5379 5582 input
split_range 5583 5788 image
split_range 5789 6008 icon
split_range 6009 6098 grid
split_range 6099 6837 form
split_range 6838 6924 floatbutton
split_range 6925 6970 flex
split_range 6971 7043 empty
split_range 7044 7120 dropdown
split_range 7121 7219 drawer
split_range 7220 7271 divider
split_range 7272 7383 descriptions
split_range 7384 7693 datepicker
split_range 7694 7918 configprovider
split_range 7919 8030 colorpicker
split_range 8031 8119 collapse
split_range 8120 8215 checkbox
split_range 8216 8353 cascader
split_range 8354 8418 carousel
split_range 8419 8504 card
split_range 8505 8632 button
split_range 8633 8725 calendar
split_range 8726 8868 breadcrumb
split_range 8869 8943 badge
split_range 8944 8994 avatar
split_range 8995 9103 autocomplete
split_range 9104 9243 app
split_range 9244 9331 anchor
split_range 9332 9402 alert
split_range 9403 9456 affix

echo "Done. Created antdesign-*.txt topic files."
