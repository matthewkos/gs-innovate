import HashTags from "../components/HashTags";
import * as React from "react";

export const mapHashTagsListToHasTags = (hashTagsList: string[]) =>
    hashTagsList.map(hashTags => <HashTags hashTag={hashTags}/>);