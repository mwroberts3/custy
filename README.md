# Custy

**Version:** 1.5.4
**Release:** 10/20/21
**License:** MIT

https://custy.netlify.app/

## Usage & Features

_Custy_ is a simple browser based customer service tracker built with React.

This app stores and retrieves data using local storage, so it's well suited for a dedicated work computer.

Added todos can be marked as "urgent" or "waiting for response".

## Future Features

- reminder feature
- some kind of web-socket use so changes are reflected in all browser instances
- dark mode

## Version History

### v1.5.4 - 10/20/21

- editing bulletin board item now pulls up HTML to edit, not just text content.
- edited bulletin board item names doesn't created a new bulletin board item

### v1.5.2 - 10/19/21

- fixed bulletin board bug so editing and adding new should work fine now

### v1.5.1 - 10/18/21

- favicon now changes to a icon with red background if there is currently an 'urgent' todo in a user's stack

- fixed night mode bug from previous version. User's preferred display mode will load correctly if window is reloaded after closing

### v1.4.3 - 8/27/21

- changed the opacity of the urgent undo to make it less likely to cause clicking errors

### v1.4.2 - 8/26/21

- editing bulletin board item is more eloquent and closing the form no longer deletes the item from local storage

- index count for identical reference numbers

### v1.4.0 - 8/22/21

- added ability to edit bulletin board items
- added rudimentary 'night mode' display
- tweaked window on focus refresh to be more streamlined

### v1.3.1 - 8/18/21

- fixed 'urgent undo' feature

### v1.3.0 - 8/16/21

- added an 'urgent undo' feature that lets users restore a closed todo immediately by clicking a temporary undo button that appears after closing

### v1.2.0 - 8/12/21

- added a restore feature that lets user restore previously closed todos

### v1.1.1 - 8/7/21

- fixed bulletin board items content container, so it can display longer items
- fixed size of bulletin board banner, so it's flush with the todo cards

### v1.1 - 8/5/21

- added a bulletin board feature that spans the top of the page, which allows users to leave more permanent notes in their Custy workspace

### v1.0.2 - 5/13/21

- tweaked CSS grid properties to keep the todo cells centered on the screen

### v1.0.1 - 3/29/21

- fixed bug that displayed add and edit todo forms simultaneously
- added 10px margin to top of the add and edit forms, so there's some separation with the button

## Contributions

Contributions are welcome, please email mwroberts89@gmail.com
