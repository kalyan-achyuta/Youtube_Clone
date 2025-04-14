import React from "react";

const commentsData = [
  {
    name: "Kalyan",
    Text: "This is a comment",
    replies: [
      {
        name: "Kalyan",
        Text: "This is a comment",
        replies: [
          {
            name: "Kalyan",
            Text: "This is a comment",
            replies: [
              {
                name: "Kalyan",
                Text: "This is a comment",
              },
            ],
          },
          {
            name: "Kalyan",
            Text: "This is a comment",
          },
        ],
      },
      {
        name: "Kalyan",
        Text: "This is a comment",
      },
    ],
  },
  {
    name: "Kalyan",
    Text: "This is a comment",
    replies: [
      {
        name: "Kalyan",
        Text: "This is a comment",
        replies: [
          {
            name: "Kalyan",
            Text: "This is a comment",
            replies: [
              {
                name: "Kalyan",
                Text: "This is a comment",
              },
            ],
          },
          {
            name: "Kalyan",
            Text: "This is a comment",
          },
        ],
      },
      {
        name: "Kalyan",
        Text: "This is a comment",
      },
    ],
  },
  {
    name: "Kalyan",
    Text: "This is a comment",
    replies: [
      {
        name: "Kalyan",
        Text: "This is a comment",
        replies: [
          {
            name: "Kalyan",
            Text: "This is a comment",
            replies: [
              {
                name: "Kalyan",
                Text: "This is a comment",
              },
            ],
          },
          {
            name: "Kalyan",
            Text: "This is a comment",
          },
        ],
      },
      {
        name: "Kalyan",
        Text: "This is a comment",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, Text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-1">
      <img
        className="w-12 h-12"
        alt="Uer"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{Text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-2 border-gray-200 ml-5">
        <CommentList comments={comment.replies || []} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-1">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
