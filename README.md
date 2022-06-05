Vampire Survivors Randomizer
============================

**Work in progress**

This app abuses the golden egg feature to randomize character stats in a save file.

Roadmap
-------

### Randomizing

- [x] adjust/specify ranges for values
  - [x] use MissingNo's ranges
- [ ] specify seed
- [ ] alternatively, import seed file
- [ ] alter save file
  - [ ] create backup of current save file
  - [ ] load a save file
  - [ ] add or subtract random values to every character's egg values
  - [ ] regenerate save file SHA
  - [ ] save altered file twice
    * in-place
    * as a pre-play save for undoing deltas while maintaining newly collected eggs later
- [ ] export seed file with speficied ranges
- [ ] save all file values to `localStorage` as failsafe

### Derandomizing

- [ ] load backup, current, and pre-play save files
- [ ] calculate differences between current and pre-play values
- [ ] apply differences to backup save file
  - [ ] golden egg
  - [ ] money
  - [ ] all other character data
- [ ] recalculate SHA
- [ ] save as current save file
- [ ] delete pre-play save file

### Rerandomizing

- [ ] Derandomize
- [ ] Randomize

### Miscellaneous

- [ ] Flesh out readme
- [ ] Restore save backup
  - [ ] from file
  - [ ] from `localStorage`
- [ ] Options
  - [ ] apply different separate deltas to different characters
  - [ ] confirm random values before applying deltas vs keep secret
    - [ ] if set to confirm, create UI for confirmation values
- [ ] Cheats
  - [ ] lock or unlock characters
  - [ ] lock or unlock weapons
