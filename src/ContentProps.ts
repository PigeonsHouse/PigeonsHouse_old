import { ReactElement } from 'react';

type Contents={
    title: string;
    contentText: ReactElement;
}

type ContentProps={
    classification: Contents;
}

export type {ContentProps}