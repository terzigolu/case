import React, { forwardRef, useMemo } from 'react'
import { ScrollView, ScrollViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const CustomScrollContent: React.ForwardRefRenderFunction<
  ScrollView,
  ScrollViewProps
> = ({ children, style, ...rest }, ref) => {
  const insets = useSafeAreaInsets()
  const handleContent = useMemo(() => {
    return (
      <ScrollView
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'always'}
        {...rest}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style}
        ref={ref}>
        {children}
        <Space marginBottom={Math.max(insets.bottom, 12)} />
      </ScrollView>
    )
  }, [children, insets.bottom, ref, rest, style])

  return <>{handleContent}</>
}

const Space = styled.View<{ marginBottom: number }>`
  height: ${(props: { marginBottom: number }) => props.marginBottom}px;
`

export default forwardRef(CustomScrollContent)
