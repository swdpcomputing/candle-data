import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationMUI = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const classes = useStyles();
  const [page, setPage] = React.useState(currentPage);

  useEffect(() => {
    checkCurrentPageIsNotBiggerThanNumberOfPages();
  });

  const checkCurrentPageIsNotBiggerThanNumberOfPages = () => {
    if (currentPage > pagesCount) {
      setPage(pagesCount);
      onPageChange(pagesCount);
    }
  };

  if (pagesCount === 1 || isNaN(pagesCount)) {
    return null;
  }

  const handleChange = (event, value) => {
    setPage(value);
    onPageChange(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={pagesCount}
        page={page}
        color="secondary"
        onChange={handleChange}
      />
    </div>
  );
};

PaginationMUI.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationMUI;
