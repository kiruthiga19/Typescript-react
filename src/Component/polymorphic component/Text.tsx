import React from 'react'

type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  children: React.ReactNode
  as?: E
}

//as is known as polimorpic component->to describe the which is displyed
//<> generic type

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export const Text = <E extends React.ElementType = 'div'>({
  size,
  color,
  children,
  as
}: TextProps<E>) => {
  const Component = as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}