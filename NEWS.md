# reactable 0.1.0.9000

### New features

* `reactable()` gains a `defaultSelected` argument to set default selected rows.
* `reactable()` gains a `defaultExpanded` argument to set default expanded rows.
* New `updateReactable()` function to update selected and expanded rows of a reactable instance in Shiny.

### Bug fixes

* `colFormat(percent = TRUE)` now works correctly when viewing tables in IE11.
* Table searching now works when row selection is enabled.
* In `colDef()`, R functions for `class` and `style` now always receive cell values as single elements.

# reactable 0.1.0

* Initial release.