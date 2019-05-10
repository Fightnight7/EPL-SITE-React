import {connect} from "react-redux";
import RegularArticlePage from "./RegularArticlePage";
import {CommentRowAC, PostCurrentCommentAC} from "../../../../redux/MainArticleReducer";

let mapStateToProps = (store) => {
    return {
        Comments: store.RegularArticleComments,
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

const RegularArticlePageContainer = connect(mapStateToProps, mapDispatchToProps)(RegularArticlePage);

export default RegularArticlePageContainer;