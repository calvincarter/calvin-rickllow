// This is code is straight from the React-Router Docs.
// It allows us to redirect a user to the top of any new page they go to.
// Without this, if a user is scrolled to the middle, or bottom, or just anywhere besides the very top of a page,
// the scroll position would be saved and if they clicked on a link to go to another page, that new page will start
// off at the position they were in on the previous page.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}