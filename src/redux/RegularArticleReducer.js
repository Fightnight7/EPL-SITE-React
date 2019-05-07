const COMMENT_ROW = 'COMMENT-ROW';
const POST_CURRENT_COMMENT = 'POST-CURRENT-COMMENT';

let initialState = {
    AllComments: [
        {id: 1, user: "Max", text: "Norwich Cool"},
        {id: 2, user: "Bogdan", text: "Norwich fuu"},
        {id: 3, user: "Roma", text: "Arsenal"}
    ],
    CurrentComment: ""
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CURRENT_COMMENT:
            return {
                ...state,
                CurrentComment: action.comment
            };

        case COMMENT_ROW:
            return {
                ...state,
                AllComments: [...state.AllComments, {id: 4,  text: action.comment, user: "Max"}]
            };
        default:
            return state;
    }
};

export let CommentRowAC = (comment) => {
    return {
        type: COMMENT_ROW,
        comment: comment
    }
};

export let PostCurrentCommentAC = (comment) => {
    return {
        type: POST_CURRENT_COMMENT,
        comment: comment
    }
};

export default commentsReducer;