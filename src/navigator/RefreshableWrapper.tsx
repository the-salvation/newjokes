import React, { useState, useCallback, FC, ReactNode } from "react";
import { fetchJoke, useAppDispatch } from "@store";
import { theme as t } from "@theme";
import { ScrollView, RefreshControl, StyleSheet } from "react-native";

interface RefreshableWrapperProps {
  children: ReactNode;
}

export const RefreshableWrapper: FC<RefreshableWrapperProps> = ({ children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    dispatch(fetchJoke());

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [fetchJoke]);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={t.purple}
          colors={[t.purple]}
          progressBackgroundColor={t.white}
          progressViewOffset={40}
          title="Pull to refresh"
          titleColor={t.purple}
        />
      }
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
