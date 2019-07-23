/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from 'styled-components';

const Table = styled.div`
  white-space: nowrap;
  margin-top: 2rem;
  border: 2px solid #e5e5e5;
  display: table;
  box-sizing: border-box;
`;

Table.displayName = 'Table';

const Row = styled.div`
  display: table-row;

  & ${Cell}:first-child {
    border-right: 2px solid #e5e5e5;
  }
`;

Row.displayName = 'Row';

const Cell = styled.div`
  display: table-cell;
  box-sizing: border-box;

  padding: 0.5rem 0.75rem;
  border-bottom: 2px solid #e5e5e5;
  background-color: #fff;
`;

Cell.displayName = 'Cell';

const Wrapper = styled.div`
  position: relative;
  overflow: auto;
  height: 100%;
  box-sizing: border-box;

  & ${Row}:nth-child(${props => `-n+${props.stickyHeaderCount}`}) ${Cell} {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  & ${Row} ${Cell}:nth-child(-n+${props => props.stickyColumnCount}) {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    z-index: 2;
  }
  & ${Row}:nth-child(-n+${props =>
  props.stickyHeaderCount}) ${Cell}:nth-child(-n+${props =>
  props.stickyColumnCount}) {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;

    &:first-child {
      border-right: 2px solid #e5e5e5;
    }
  }
`;

Wrapper.displayName = 'Wrapper';

function StickyTable({
  stickyColumnCount = 1,
  stickyHeaderCount = 1,
  children,
  ...rest
}) {
  return (
    <Wrapper
      stickyColumnCount={stickyColumnCount}
      stickyHeaderCount={stickyHeaderCount}
      {...rest}
    >
      <Table>{children}</Table>
    </Wrapper>
  );
}

export { StickyTable, Table, Row, Cell };
