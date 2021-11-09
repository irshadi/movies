import React from "react";
import debounce from "lodash/debounce";

/**
 * This hooks responsible for handling state (both display value and the actual state value)
 * for <SearchInput /> component.
 *
 * @param {*} config
 * @returns {*}
 */
export const useSearchInput = (config = {}) => {
  const { delay = 500, onClear } = config;

  /**
   * On this hook primarly we need two state, the first one is to manage "controlled input"
   * in this case it was assigned to "displayValue", the second one is to manage internally
   * the debounced/delayed value for whatever purpose.
   *
   * displayValue: manage "controlled input" for input
   * searchValue: manage and handle debounced value
   */
  const [displayValue, _setDisplayValue] = React.useState("");
  const [searchValue, _setSearchValue] = React.useState("");

  // Handle change display value
  const setDisplayValue = value => _setDisplayValue(value);

  // Handle trigger delay for "searchValue" state
  const _handleSearch = React.useCallback(
    debounce(value => _setSearchValue(value), delay),
    [debounce, _setSearchValue]
  );

  // Supplies onClear props on <SearchInput />
  const handleClearSearch = () => {
    _setDisplayValue("");
    _setSearchValue("");
    onClear();
  };

  // Side effect to delay between the displayValue and searchValue
  React.useEffect(() => {
    _handleSearch(displayValue);
  }, [_handleSearch, displayValue]);

  return {
    displayValue,
    setDisplayValue,
    searchValue,
    handleClearSearch
  };
};
