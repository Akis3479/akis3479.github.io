1. **Update `App.jsx` to handle loading state based on image loading.**
    - Import `useState` and `useEffect` from `react`.
    - Import the `Loading` component from `./Components/Loading/Loading`.
    - Import the background image (`bg.webp`) and profile image (`image.webp`).
    - Add state for `isLoading`, initialized to `true`.
    - Use `useEffect` to pre-load the images. Once both images are loaded (or hit an error fallback), set `isLoading` to `false`.
    - Render `<Loading />` if `isLoading` is true, otherwise render `<Menu />`.
2. **Verify changes and build.**
    - Run `npm run build` in the `Portfolio/` directory to ensure no build errors.
    - Start the dev server and verify visually using the playwright instructions.
3. **Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.**
4. **Submit changes.**
