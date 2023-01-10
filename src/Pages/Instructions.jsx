import React from "react";

const Instructions = () => {
  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          color: "  rgb(38 38 38)",
          fontWeight: "bold",
          fontSize: "17px",
        }}
      >
        Please read the instructions carefully
      </div>
      <div
        style={{
          color: "  rgb(38 38 38)",
          fontWeight: "bold",
          fontSize: "15px",
          textDecoration: "underline",
          margin: "16px 0px 16px 0px",
        }}
      >
        General Instructions :
      </div>
      <div style={{ lineHeight: "25px" }}>
        <div
        // style={{ marginBottom: "2px" }}
        >
          1. the clock has been set a server and the countdown at the top of
          your screen will display the time remaining for you to complete the
          exam.
        </div>
        <div>
          <div>
            2. The questions palette at the right of your screen shows one of
            the following statuses of each of the questions numbered
          </div>
          <div style={{ marginLeft: "30px" }}>
            <div>
              {" "}
              <span
                style={{
                  border: "1px solid black",
                  borderRadius: "100%",
                  fontsize: "30px",
                  textAlign: "center",
                  padding: "0px 10px",
                  marginRight: "10px",
                }}
              >
                1
              </span>
              you have not visited the question yet.
            </div>
            <div>
              <span
                style={{
                  borderRadius: "100%",
                  fontsize: "30px",
                  textAlign: "center",
                  padding: "0px 10px",
                  marginRight: "10px",
                  backgroundColor: "rgb(239 68 68)",
                  color: "white",
                }}
              >
                5
              </span>
              you have not answer the question yet.
            </div>
            <div>
              {" "}
              <span
                style={{
                  borderRadius: "100%",
                  fontsize: "30px",
                  textAlign: "center",
                  padding: "0px 10px",
                  marginRight: "10px",
                  backgroundColor: " rgb(34 197 94)",
                  color: "white",
                }}
              >
                3
              </span>
              you have answer the question yet.
            </div>
            <div>
              <span
                style={{
                  borderRadius: "100%",
                  fontsize: "30px",
                  textAlign: "center",
                  padding: "0px 10px",
                  marginRight: "10px",
                  backgroundColor: " rgb(168 85 247)",
                  color: "white",
                }}
              >
                7
              </span>
              you have NOT answer the question but have marked the question for
              review.
            </div>
            <div>
              {" "}
              <span
                style={{
                  borderRadius: "100%",
                  fontsize: "30px",
                  textAlign: "center",
                  padding: "0px 10px",
                  marginRight: "10px",
                  backgroundColor: " rgb(59 130 246)",
                  color: "white",
                }}
              >
                9
              </span>
              you have answer the question but marked for it review.
            </div>
          </div>
          <div>
            The Marked for Review status simply acts as a reminder that you have
            set to look at the question again ,{" "}
            <i style={{ color: "red" }}>
              {" "}
              If an answer is selected for a question That is Marked for Review
              , the answer will be considered in the final evaluation
            </i>{" "}
          </div>
        </div>
        <div
          style={{
            color: "  rgb(38 38 38)",
            fontWeight: "bold",
            fontSize: "15px",
            textDecoration: "underline",
            margin: "15px 0px 15px 0px",
          }}
        >
          Navigation to a question :{" "}
        </div>

        <div>
          <div>
            3. To select a question to answer , you can do one of the following
          </div>
          <div style={{ marginLeft: "30px" }}>
            <div>
              a. Click on the question number on question palette at the right
              of your screen to go to that numbered question directly. Note that
              using this option does not save your answer to the current
              question.
            </div>
            <div>
              b. click on save and next to save answer to current question and
              to go the next question in sequence.
            </div>
            <div>
              c. click on marked for review to save answer to current question ,
              mark for it review and to go the next question in sequence.
            </div>
          </div>
          <div>
            4. You can review the entire paper by clicking on the{" "}
            <b> question paper </b>
            button.
          </div>
        </div>

        <div
          style={{
            color: "  rgb(38 38 38)",
            fontWeight: "bold",
            fontSize: "15px",
            textDecoration: "underline",
            margin: "15px 0px 15px 0px",
          }}
        >
          Answering questions
        </div>
        <div>
          <div>5. For multiple choice type question :</div>
          <div style={{ marginLeft: "30px" }}>
            <div>
              a. To select your answer ,Click on one of the option button.{" "}
            </div>
            <div>
              b. To change your answer , click the another desired option button{" "}
            </div>
            <div>
              c. To save your answer , you MUST click on <b> Save & Next </b>{" "}
              button
            </div>
            <div>
              d. To deselect a choosen answer , click on the chosen option again
              or click on the <b> Clear Response </b> button
            </div>
            <div>
              e. To mark a question for review click on <b> Mark for Review </b>{" "}
              .
              <i style={{ color: "red" }}>
                {" "}
                If an answer is selected for a question That is Marked for
                Review , the answer will be considered in the final evaluation
              </i>
            </div>
          </div>
          <div>
            6. To change an answer to the question, firt select the question and
            click on the new answer option followed by a click on the{" "}
            <b> Save & Next </b> button .
          </div>
          <div>
            7. Question that are saved and marked gor review after answering
            will ONLY be considered for evaluation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
