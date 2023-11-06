class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex >= this.pageCount() || pageIndex < 0) {
            return -1;
        }
        else if (this.pageCount() ===  pageIndex + 1  && this.itemCount() %  this.itemsPerPage){
            return this.itemCount() %  this.itemsPerPage;
        }

        else {
            return this.itemsPerPage;
        }
    }
    pageIndex(itemIndex) {
        return itemIndex >= this.itemCount() || itemIndex < 0 ? -1 : Math.floor(itemIndex / this.itemsPerPage);
    }
}
