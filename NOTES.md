Filter
The entries for any collection can be filtered based on the value of a single field. The example collection below only shows post entries with the value en in the language field.

collections:

- name: "posts"
  label: "Post"
  folder: "\_posts"
  filter:
  field: language
  value: en
  fields:
  - {label: "Language", name: "language"}
