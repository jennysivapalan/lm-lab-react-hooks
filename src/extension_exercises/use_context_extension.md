# Extension 🔥

If you have completed this challege AND all the other hook challenges... then you are ready to Level Up 💪

You might have noticed in the `Parent` component the button element might be better off being its own separate component:

`<button onClick={toggleTheme}>Toggle Theme</button>`

You may also be thinking, having Theme logic in the parent component is ok.. but might be a little neater in its own separate file?

- Can you strip out the button into a separate component and still keep the functionality working?

- Have a go at creating a `theme_context.tsx` file and a custom hook `use_theme_context.tsx`

`theme_context.tsx` hints:

- this file should contain your `isDarkTheme` state, your `toggleTheme` function and your `theme` object

- it should export a `ThemeProvider` component that wraps other components

```TypeScript
      <ThemeContext.Provider
            value={{
                theme: theme,
                toggleTheme: toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>

```

Good luck!

If you get really stuck you can see a solution repo here:
