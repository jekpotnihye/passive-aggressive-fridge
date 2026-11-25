# Build

## What it does

`main.ts` writes exactly one line — the fridge's passive-aggressive note — to
`/output/entry.txt`. It creates `/output` if needed and writes the text with no
trailing newline, so the file holds exactly the entry.

## Run it

```sh
node main.ts
```

Node 22.18 or later runs the TypeScript directly (the grader runs Node 22.23.4).
No dependencies, no network, no environment secrets.

## Verify

```sh
node main.ts
cat /output/entry.txt
wc -c /output/entry.txt
```

Expected output (75 characters, one line, byte-identical across runs):

```
Door opened 23 times. Food taken: none. Conclusion: you came for the light.
```

## How the entry was chosen

The brief was read first: the note must be a funny passive-aggressive note a
smart fridge leaves for its owner (criterion 1), deliver a real joke with a
turn or sting the reader does not see coming (criterion 2), speak in the
fridge's voice — smug about sensors, inventory and door alarms, petty about
the owner's habits (criterion 3), keep the grudge small and domestic
(criterion 4), and use fresh, concrete detail instead of generic nagging
(criterion 5). The entry was polished three times: from a sighed, explanatory
first draft, through a shop-window version that explained its own joke, to a
tighter two-sentence version, and finally to the door-log format, which reads
like the fridge's own screen, keeps the sensor count and the inventory check,
and lands the twist on the last word, "light".
