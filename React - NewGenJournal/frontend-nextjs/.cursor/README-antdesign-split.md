# Ant Design docs split (from llms-full.txt)

Use these files as **@** context in Cursor to avoid sending the full 22k-line `llms-full.txt`.

## Default (use most of the time)

- **@antdesign-semantic-list.txt** — Component list + semantic descriptions (~550 lines). Use for "what components exist" and general Ant Design questions.

## When working on a specific component

Attach only the topic file you need. **Every** Ant Design component has a topic file (64 total):

**affix** · **alert** · **anchor** · **app** · **autocomplete** · **avatar** · **badge** · **breadcrumb** · **button** · **calendar** · **card** · **carousel** · **cascader** · **checkbox** · **collapse** · **colorpicker** · **configprovider** · **datepicker** · **descriptions** · **divider** · **drawer** · **dropdown** · **empty** · **flex** · **floatbutton** · **form** · **grid** · **icon** · **image** · **input** · **inputnumber** · **layout** · **list** · **masonry** · **mentions** · **menu** · **message** · **modal** · **notification** · **pagination** · **popconfirm** · **popover** · **progress** · **qrcode** · **radio** · **rate** · **result** · **segmented** · **select** · **skeleton** · **slider** · **space** · **spin** · **splitter** · **statistic** · **steps** · **switch** · **table** · **tabs** · **tag** · **timepicker** · **timeline** · **tooltip** · **tour** · **transfer** · **tree** · **treeselect** · **typography** · **upload** · **watermark**

Use **@antdesign-&lt;name&gt;.txt** (e.g. **@antdesign-button.txt**, **@antdesign-input.txt**).

## Example

- General: "How do I style an Ant Design button?" → **@antdesign-semantic-list.txt**
- Forms: "Form with async validation" → **@antdesign-semantic-list.txt** + **@antdesign-form.txt**
- Tables: "Table with fixed columns" → **@antdesign-table.txt**
