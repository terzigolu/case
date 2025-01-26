import React, { useMemo } from 'react';
import {
  RefreshControl,
  SafeAreaView,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import Loading from '~components/Loading';
import ScrollableContent from '~components/ui/ScrollableContent';
import { useAppSelector } from '~store/hooks/hooks';
import { useTheme } from '~theme/ThemeProvider'; // useTheme ekleniyor

type Props = ViewProps & {
  useScrollView?: boolean;
  disableSafeArea?: boolean;
  scrollViewStyle?: ViewStyle;
  onRefresh?: () => void;
  refreshing?: boolean;
  style?: ViewStyle;
  disableLoading?: boolean;
  disableBottomPadding?: boolean;
  bgColor?: string;
};

const AppLayout = ({
  style,
  useScrollView,
  disableSafeArea,
  children,
  scrollViewStyle,
  onRefresh,
  refreshing,
  disableLoading,
  bgColor,
  ...rest
}: Props) => {
  const { theme } = useTheme(); // Tema kullanımı
  const isLoading = useAppSelector(state => state.loading.loading); // 'app' yerine 'fakeStoreApi' kullanıldı
  const refreshControl = useMemo(
    () =>
      onRefresh && (
        <RefreshControl
          refreshing={refreshing || false}
          onRefresh={onRefresh}
        />
      ),
    [onRefresh, refreshing]
  );

  const main = useMemo(
    () => (
      <>
        {useScrollView ? (
          <ScrollableContent
            refreshControl={refreshControl}
            style={scrollViewStyle}>
            {children}
          </ScrollableContent>
        ) : (
          children
        )}
        {isLoading && !disableLoading && <Loading />}
      </>
    ),
    [
      useScrollView,
      refreshControl,
      scrollViewStyle,
      children,
      isLoading,
      disableLoading,
    ]
  );

  const Container = disableSafeArea ? View : SafeAreaView;

  return (
    <Container
      style={[
        { flex: 1 }, // styles.scrollView yerine flex: 1 eklendi
        style?.backgroundColor ? style : {}, // JSON stil nesnesi
        { backgroundColor: bgColor || theme.colors.background }, // Tema rengi kullanımı
      ]}
      {...rest}>
      <View
        style={[
          { flex: 1 }, // styles.root yerine flex: 1 eklendi
          style,
          { backgroundColor: bgColor ? bgColor : theme.colors.background }, // Tema rengi kullanımı
        ]}
        {...rest}>
        {main}
      </View>
      {isLoading && <Loading />}
    </Container>
  );
};

AppLayout.defaultProps = {
  useScrollView: false,
  disableSafeArea: false,
};

export default AppLayout;
