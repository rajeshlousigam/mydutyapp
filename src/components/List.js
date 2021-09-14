import React from 'react';
import {FlatList, ScrollView} from 'react-native';

const List = ({
  type = '',
  data = [],
  onEndReached = () => {},
  listItem: ListItem,
  ...rest
}) => {
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  if (type == 'scroll')
    return (
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            onEndReached();
          }
        }}
        scrollEventThrottle={200}
        {...rest}>
        {data.map((item, index) => (
          <ListItem
            index={index}
            key={index}
            {...rest}
            {...item}
            id={item.key}
          />
        ))}
      </ScrollView>
    );

  return type == 'flat' ? (
    <FlatList
      onEndReached={onEndReached}
      data={data}
      {...rest}
      renderItem={({item, index}) => (
        <ListItem index={index} key={index} {...item} {...rest} id={item.key} />
      )}
    />
  ) : (
    <>
      {data.map((item, index) => (
        <ListItem index={index} key={index} {...rest} {...item} id={item.key} />
      ))}
    </>
  );
};

export default List;
