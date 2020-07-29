import React, { Component } from "react";
import "./styles.scss";
// icons
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


class Pagination extends Component {
  componentDidMount() {
    this.handleTotalPages();
  }

  handleTotalPages = (dir) => {
    const { totalPages,page, perPage, totalCount, getPage } = this.props;
    getPage(dir);
    return (
      page,
      totalPages,
      totalCount,
      perPage
    )
  }

    render() {
        const { page, totalPages } = this.props;

        return <div className="pagination">
                <div className="paginationWrapper">
                    <button
                      onClick={() => this.handleTotalPages("prev")}
                      className="paginationButtonLeft"
                    >
                      <ArrowLeftIcon />
                      Previous
                    </button>
                    <span>
                       page:  {page}  {" of "} {totalPages}
                    </span>
                    <button
                      onClick={() => this.handleTotalPages("next")}
                      className="paginationButtonRight"
                    >
                       Next  <ArrowRightIcon />
                    </button>
                </div>
        </div>
    }
}



export default Pagination;
