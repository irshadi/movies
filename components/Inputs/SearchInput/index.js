import React from "react";
import Input from "../Input";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  IconButton,
  Spinner
} from "@chakra-ui/react";
import { IoMdCloseCircle, IoIosSearch } from "react-icons/io";
import { useSearchInput } from "../../../hooks/useSearchInput";

const SearchInput = ({
  isSearching,
  onClear,
  onSearch = () => {},

  hasOnClear = true,
  ...props
}) => {
  const { displayValue, setDisplayValue, searchValue, handleClearSearch } =
    useSearchInput({ delay: 500 });

  const _hasOnClear = hasOnClear && Boolean(displayValue.length);

  // Trigger search on higher level
  React.useEffect(() => {
    onSearch(searchValue);
  }, [searchValue]);

  return (
    <InputGroup my="1em">
      <InputLeftElement pointerEvents="none">
        <Icon as={IoIosSearch} color="gray.700" />
      </InputLeftElement>
      <Input
        pl="2.5em"
        borderRadius="full"
        {...props}
        value={displayValue}
        onChange={e => setDisplayValue(e.target.value)}
      />
      {_hasOnClear && (
        <InputRightElement>
          {isSearching ? (
            <Spinner color="gray.700" size="sm" />
          ) : (
            <IconButton
              onClick={handleClearSearch}
              icon={<IoMdCloseCircle />}
              bg="transparent"
              border="none"
              rounded="full"
              color="gray.700"
              size="sm"
              _hover={{
                color: "red.300"
              }}
              data-cy="clear-search-input-button"
            />
          )}
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default SearchInput;
