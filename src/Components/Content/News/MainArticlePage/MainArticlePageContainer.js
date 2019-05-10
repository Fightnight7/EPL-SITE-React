import {connect} from "react-redux";
import MainArticlePage from "./MainArticlePage";
import {CommentRowAC, PostCurrentCommentAC} from "../../../../redux/MainArticleReducer";

let mapStateToProps = (store) => {
    return {
        Comments: store.MainArticleComments,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getNewComment: (newComment) => {
            dispatch(PostCurrentCommentAC(newComment));
        },
        postComment: (text) =>{
            dispatch(CommentRowAC(text));
        }
    }
};

const MainArticlePageContainer = connect(mapStateToProps, mapDispatchToProps)(MainArticlePage);

export default MainArticlePageContainer;