import {StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import Cell from './Cell';

const VerticalPath = React.memo(({cells, color}) => {
  const groupedCells = useMemo(() => {
    const groups = [];
    for (let i = 0; i < cells.length; i += 3) {
      groups.push(cells.slice(i, i + 3));
    }
    return groups;
  }, [cells]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%',
        height: '100%',
      }}>
      <View style={{flexDirection: 'column', width: '100%', height: '100%'}}>
        {groupedCells.map((group, groupIndex) => {
          return (
            <View
              key={`group=${groupIndex}`}
              style={{flexDirection: 'row', width: '33.33%', height: '26.1'}}>
              {group.map(id => {
                return <Cell key={`cell-${id}`} id={id} color={color} />;
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
});

export default VerticalPath;

const styles = StyleSheet.create({});