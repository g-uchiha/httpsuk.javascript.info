import {post, goods, folder} from "./state.js";

function countComments(postComments) {
    let count = 0;

    for(const comment of postComments) {
        count++;
        count += countComments(comment.replies);
    }

    return count;
}

function searchGoods(goods, title) {
    for(const item of goods) {
        if(item.name === title) {
            return item;
        }

        if(item.articles) {
            const result = searchGoods(item.articles, title);
            if(result) return result;
        }
    }

    return null;
}

function getLongestPath(node) {
    if(node.folders.length === 0) {
        return node.name + (node.files[0] ? `\\${node.files[0]}` : '');
    }

    let path = "";

    for(const item of node.folders) {
        const currentPath = getLongestPath(item);
        const pathArr = path.split("\\");
        const currArr = currentPath.split("\\");

        const comparingValue = pathArr[0] === "" ? 0 : pathArr.length;

        if(currArr.length > comparingValue) {
            path = currentPath;
        }
    }

    return node.name + "\\" + path;
}