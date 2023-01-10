import React from "react";
const SummaryOfExam = [
  {
    SectionName: "sectionName",
    totalquestions: "No. of questions",
    subjectName: "English",
  },
  {
    SectionName: "  No. of questions",
    totalquestions: "35",
    subjectName: "12",
  },
  {
    SectionName: "  Answered",
    totalquestions: "35",
    subjectName: "23",
  },
  {
    SectionName: "Not Answered",
    totalquestions: "35",
    subjectName: "12",
  },
  {
    SectionName: "Marked For Review",
    totalquestions: "35",
    subjectName: "12",
  },
  {
    SectionName: "Not Visited",
    totalquestions: "35",
    subjectName: "12",
  },
];
const ExamSummary = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
        flexDirection: "column",
      }}
    >
      {" "}
      <div style={{ fontSize: "30px", fontWeight: "bold" }}>
        <i> Exam Summary</i>
      </div>
      <div
        style={{
          width: "30%",
          margin: "35px 0 35px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid rgb(203 213 225)",
        }}
      >
        {SummaryOfExam?.map((data) => (
          <div
            style={{
              display: "flex",
              width: "100%",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "33.3%",
                color: " rgb(96 165 250)",
                borderRight: "1px solid rgb(203 213 225)",
                backgroundColor: "rgb(249 250 251)",
                padding: "4px",
              }}
            >
              {data?.SectionName}
            </div>

            <div
              style={{
                display: "flex",
                width: "33.3%",
                color: " rgb(96 165 250)",
                borderRight: "1px solid rgb(203 213 225)",
                justifyContent: "center",
                padding: "4px",
              }}
            >
              {data?.totalquestions}
            </div>

            <div
              style={{
                display: "flex",
                width: "33.3%",
                color: " rgb(96 165 250)",

                justifyContent: "center",
                padding: "4px",
              }}
            >
              {" "}
              {data?.subjectName}
            </div>
          </div>
        ))}
      </div>{" "}
      <div style={{ marginBottom: "10px" }}>
        Are tou sure you want to submit ?
      </div>
      <div>
        <i style={{ color: "red" }}>
          You still have Unattempted & Mark for review questions
        </i>
      </div>{" "}
      <div
        style={{
          width: "30%",

          display: "flex",
          justifyContent: "space-around",
          margin: "20px ",
        }}
      >
        <button
          style={{
            backgroundColor: " rgb(96 165 250)",
            padding: "13px ",
            width: "210px",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Cancel
        </button>
        <button
          style={{
            backgroundColor: " rgb(96 165 250)",
            padding: "13px ",
            width: "210px",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default ExamSummary;
