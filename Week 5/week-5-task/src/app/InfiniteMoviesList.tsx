import React, { useEffect, useRef } from 'react';
import {
  InfiniteLoader,
  List,
  WindowScroller,
  AutoSizer,
  IndexRange,
} from 'react-virtualized';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    justifyContent: 'center',
  },
  gridItem: {
    padding: theme.spacing(1.5),
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  bg: {
    backgroundColor: '#000000',
  },
}));

function generateIndexesForRow(
  rowIndex: number,
  rowWidth: number,
  itemWidth: number,
  itemsAmount: number
) {
  const result = [];
  const maxItemsPerRow = getMaxItemsAmountPerRow(rowWidth, itemWidth);
  const startIndex = rowIndex * maxItemsPerRow;

  for (
    let i = startIndex;
    i < Math.min(startIndex + maxItemsPerRow, itemsAmount);
    i++
  ) {
    result.push(i);
  }

  return result;
}

function getMaxItemsAmountPerRow(rowWidth: number, itemWidth: number) {
  return Math.max(Math.floor(rowWidth / itemWidth), 1);
}

function getRowsAmount(
  rowWidth: number,
  itemWidth: number,
  itemsAmount: number,
  hasMore: boolean
) {
  const maxItemsPerRow = getMaxItemsAmountPerRow(rowWidth, itemWidth);

  return Math.ceil(itemsAmount / maxItemsPerRow) + (hasMore ? 1 : 0);
}

type ItemRenderer<ItemType> = (item: ItemType) => React.ReactNode;

interface InfiniteMoviesListProps<ItemType> {
  items?: ItemType[];
  fetchItems?: Function;
  hasMore?: boolean;
  isFetching?: boolean;
  reset?: boolean;
  itemWidth?: number;
  itemHeight?: number;
  children: ItemRenderer<ItemType>;
}

function InfiniteMoviesList<ItemType>({
  itemWidth = 400,
  itemHeight = 370,
  hasMore = false,
  items = [],
  reset = false,
  isFetching = false,
  fetchItems = () => {},
  children,
}: InfiniteMoviesListProps<ItemType>) {
  const classes = useStyles();
  const infiniteLoaderRef = useRef<InfiniteLoader>(null);

  useEffect(() => {
    if (reset && infiniteLoaderRef.current) {
      infiniteLoaderRef.current.resetLoadMoreRowsCache(true);
    }
  }, [reset, infiniteLoaderRef]);

  // TODO: check if it's possible to leverage the returned promise
  const loadMoreRows = async (_: IndexRange) => {
    if (!isFetching) {
      fetchItems();
    }
  };

  const noRowsRenderer = () => (
    <Grid item>
      <Typography>No movies found</Typography>
    </Grid>
  );

  return (
    <section>
      <AutoSizer disableHeight>
        {({ width: rowWidth }) => {
          const rowCount = getRowsAmount(
            rowWidth,
            itemWidth,
            items.length,
            hasMore
          );

          return (
            <InfiniteLoader
              ref={infiniteLoaderRef}
              rowCount={rowCount}
              isRowLoaded={({ index }) => {
                const allItemsLoaded =
                  generateIndexesForRow(
                    index,
                    rowWidth,
                    itemWidth,
                    items.length
                  ).length > 0;

                return !hasMore || allItemsLoaded;
              }}
              loadMoreRows={loadMoreRows}
            >
              {({ onRowsRendered, registerChild }) => (
                <WindowScroller>
                  {({ height, scrollTop }) => (
                    <List
                      className={classes.grid}
                      autoHeight
                      ref={registerChild}
                      height={height}
                      scrollTop={scrollTop}
                      width={rowWidth}
                      rowCount={rowCount}
                      rowHeight={itemHeight}
                      onRowsRendered={onRowsRendered}
                      rowRenderer={({ index, style, key }) => {
                        const itemsForRow = generateIndexesForRow(
                          index,
                          rowWidth,
                          itemWidth,
                          items.length
                        ).map((itemIndex) => items[itemIndex]);

                        return (
                          <div style={style} key={key} className={classes.row}>
                            {itemsForRow.map((item, itemIndex) => (
                              <Grid
                                item
                                className={classes.gridItem}
                                style={{ width: itemWidth }}
                                key={itemIndex}
                              >
                                {children(item)}
                              </Grid>
                            ))}
                          </div>
                        );
                      }}
                      noRowsRenderer={noRowsRenderer}
                    />
                  )}
                </WindowScroller>
              )}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </section>
  );
}

export default InfiniteMoviesList;
