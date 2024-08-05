export interface IPosts {
    id:                       number;
    postByUser:               number;
    title:                    string;
    body:                     string;
    creationDate:             Date;
    estimatedPublicationDate: Date;
    status:                   string;
    approvalPercentage:       number;
    corrections:              string;
    platform:                 string;
    postUrl:                  string;
    multimediaUrl:            string;
    deletedAt:                null;
}
