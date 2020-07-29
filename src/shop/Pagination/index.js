import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import "./styles.scss";
// icons
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

class Pagination extends Component {
  componentDidMount() {
    this.handleTotalPages();
  }

  handleTotalPages = (dir) => {
    let { totalPages, page } = this.props;
    if (dir === "next" && page < totalPages) {
      page++;
      return this.props.getPage(page);
    } else if (dir === "prev" && page > 1) {
      page--;
      return this.props.getPage(page);
    }
  };

  render() {
    let { page, totalPages } = this.props;

    return (
      <div className="pagination">
        <div className="paginationWrapper">
          <Button
            variant="contained"
            size="large"
            color="default"
            startIcon={<ArrowLeftIcon />}
            className={
              page === 1
                ? "paginationButtonLeft buttonDisabled"
                : "paginationButtonLeft buttonEnabled"
            }
            onClick={() => this.handleTotalPages("prev")}
          >
            Prev
          </Button>
          <span>
            <Fab className="paginationLeft" variant="extended">{page}</Fab>
            <b>{" of "}</b>
                  <Fab className="paginationRight" variant="extended">{totalPages}</Fab>
          </span>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRightIcon />}
            className={
              page === totalPages
                ? "paginationButtonRight buttonDisabled"
                : "paginationButtonRight buttonEnabled"
            }
            onClick={() => this.handleTotalPages("next")}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default Pagination;
