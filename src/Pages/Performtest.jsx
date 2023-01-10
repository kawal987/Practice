import React, { useEffect, useState } from "react";
import Page from "@/components/Page";
import AppIcons from "@/utils/AppIcons";
import { Radio, Space, Form, Button, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import { connect, useParams, useLocation } from "umi";
import SideCardOfDetails from "./SideCardOfDetails";
import TimerOfPerformTest from "../../../../../../../components/TimerOfPerformTest/index";
import SubmittedTestModal from "./SubmittedTestModal";
import ModalOfSubmitTest from "./ModalOfSubmitTest";
import InstructionsOfPerformTest from "./InstructionsOfPerformTest";

const PerformTest = ({
  dispatch,
  performTestsById,
  currentUser,
  //  testRecordById, history
}) => {
  // console.log('performTestsById', performTestsById);

  const testData = {
    name: "Govt test",
    totalMarks: 100,
    questions: [
      {
        id: 1,
        name: "What is the color of sky?",
        option: [
          {
            optionID: 1,
            optionName: "Red",
          },
          {
            optionID: 2,
            optionName: "Blue",
          },
          {
            optionID: 3,
            optionName: "yellow",
          },
          {
            optionID: 4,
            optionName: "Sky-blue",
          },
        ],
      },
      {
        id: 2,
        name: "What is the color of water?",
        option: [
          {
            optionID: 1,
            optionName: "Blue",
          },
          {
            optionID: 2,
            optionName: "Sky-Blue",
          },
          {
            optionID: 3,
            optionName: "Water-Color",
          },
          {
            optionID: 4,
            optionName: "none",
          },
        ],
      },
      {
        id: 3,
        name: "What is the color of rose?",
        option: [
          {
            optionID: 1,
            optionName: "Blue",
          },
          {
            optionID: 2,
            optionName: "Sky-Blue",
          },
          {
            optionID: 3,
            optionName: "Water-Color",
          },
          {
            optionID: 4,
            optionName: "none",
          },
        ],
      },
      {
        id: 4,
        name: "What is the color of lotus?",
        option: [
          {
            optionID: 1,
            optionName: "Pink",
          },
          {
            optionID: 2,
            optionName: "Sky-Blue",
          },
          {
            optionID: 3,
            optionName: "Yellow",
          },
          {
            optionID: 4,
            optionName: "none",
          },
        ],
      },
      {
        id: 5,
        name: "What is the color of Banana?",
        option: [
          {
            optionID: 1,
            optionName: "Pink",
          },
          {
            optionID: 2,
            optionName: "Sky-Blue",
          },
          {
            optionID: 3,
            optionName: "Yellow",
          },
          {
            optionID: 4,
            optionName: "none",
          },
        ],
      },
      {
        id: 6,
        name: "What is the color of Guava?",
        option: [
          {
            optionID: 1,
            optionName: "Pink",
          },
          {
            optionID: 2,
            optionName: "Sky-Blue",
          },
          {
            optionID: 3,
            optionName: "Yellow",
          },
          {
            optionID: 4,
            optionName: "none",
          },
        ],
      },
    ],
  };

  const totalNumberOfQuestions = [
    { numberId: 1, answerChecked: "Not Visited" },
    { numberId: 2, answerChecked: "Not Visited" },
    { numberId: 3, answerChecked: "Not Visited" },
    { numberId: 4, answerChecked: "Not Visited" },
    { numberId: 5, answerChecked: "Not Visited" },
    { numberId: 6, answerChecked: "Not Visited" },
    { numberId: 7, answerChecked: "Not Visited" },
    { numberId: 8, answerChecked: "Not Visited" },
    { numberId: 9, answerChecked: "Not Visited" },
    { numberId: 10, answerChecked: "Not Visited" },
    { numberId: 11, answerChecked: "Not Visited" },
    { numberId: 12, answerChecked: "Not Visited" },
    { numberId: 13, answerChecked: "Not Visited" },
    { numberId: 14, answerChecked: "Not Visited" },
    { numberId: 15, answerChecked: "Not Visited" },
    { numberId: 16, answerChecked: "Not Visited" },
    { numberId: 17, answerChecked: "Not Visited" },
    { numberId: 18, answerChecked: "Not Visited" },
    { numberId: 19, answerChecked: "Not Visited" },
    { numberId: 20, answerChecked: "Not Visited" },
    { numberId: 21, answerChecked: "Not Visited" },
    { numberId: 22, answerChecked: "Not Visited" },
    { numberId: 23, answerChecked: "Not Visited" },
    { numberId: 24, answerChecked: "Not Visited" },
    { numberId: 25, answerChecked: "Not Visited" },
    { numberId: 26, answerChecked: "Not Visited" },
    { numberId: 27, answerChecked: "Not Visited" },
    { numberId: 28, answerChecked: "Not Visited" },
    { numberId: 29, answerChecked: "Not Visited" },
    { numberId: 30, answerChecked: "Not Visited" },
    { numberId: 31, answerChecked: "Not Visited" },
    { numberId: 32, answerChecked: "Not Visited" },
    { numberId: 33, answerChecked: "Not Visited" },
    { numberId: 34, answerChecked: "Not Visited" },
    { numberId: 35, answerChecked: "Not Visited" },
  ];
  const DetailsOfAnswers = [
    {
      number: "0",
      answerCategory: "Answered",
    },
    {
      number: "0",
      answerCategory: "Marked and Answered",
    },
    {
      number: "0",
      answerCategory: "Not Visited",
    },
    {
      number: "0",
      answerCategory: "Not Answered ",
    },
    {
      number: "0",
      answerCategory: "Marked",
    },
  ];
  const [timer, setTimer] = useState("00:00:00");
  const [isShowSubmittedTestModal, setIsShowSubmittedTestModal] =
    useState(false);

  const [form] = useForm();
  const [currentQuestions, setCurrentQuestions] = useState(0);
  console.log("currentQuestions", currentQuestions);
  const [value, setValue] = useState();
  const [answerId, setAnswerId] = useState();
  const [visible, setVisible] = useState(false);
  const [isShowInstructions, setIsShowInstructions] = useState(true);
  const [isAnswered, setIsAnswered] = useState([]);
  const [arrayOfTotalNumberOfQuestions, setArrayOfTotalNumberOfQuestions] =
    useState(totalNumberOfQuestions);
  const [answerNumber, setAnswerNumber] = useState([]);

  const { testId } = useParams();
  const {
    query: { question },
  } = useLocation();

  const createQuestion = (qs) => {
    const options = Object.keys(qs)?.filter((data) => data?.includes("option"));

    return options?.map((option, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <Radio
        key={qs[option]}
        // key={`${idx}${qs[option]}`}
        value={qs[option]}
        id={qs?.answers[idx]?.id}
        onClick={() => console.log("value", qs[option])}
      >
        {qs[option]}
      </Radio>
    ));
  };

  // const createQuestion = (qs) => {
  //   console.log('qs', qs);
  // const options = Object.keys(qs)?.filter((data) => data?.includes('option'));

  //   return qs?.option?.map((option, idx) => (
  //     // eslint-disable-next-line react/no-array-index-key
  //     <Radio key={`${idx}${option?.optionID}`} value={option?.optionID}>
  //       {option?.optionName}
  //     </Radio>
  //   ));
  // };
  // console.log('testId', testId);
  useEffect(() => {
    dispatch({
      type: "tests/getPerformTestsById",
      payload: { pathParams: { testId: testId } },
    });
    // .then((res) => console.log('res', res));
  }, [dispatch, testId]);

  useEffect(() => {
    setCurrentQuestions(Number(question) || 1);
  }, [question]);

  const onRadioChange = (e) => {
    setValue(e.target.value);
    setAnswerId(e?.target?.id);
  };
  //delete
  const ClearResponse = (id) => {
    const payload = {
      pathParams: { testId: testId, questionsId: id },
      query: { studentId: currentUser?.id },
    };
    dispatch({
      type: "tests/getClearResponse",
      payload,
    }).then((resp) => {
      console.log("resp", resp);
    });
  };

  const getAllQuestionsStatus = (id) => {
    const payload = {
      pathParams: {
        testId: testId,
        questionsId: id,
        studentId: currentUser.id,
      },
    };

    dispatch({
      type: "tests/getAllTestsDetails",
      payload,
    }).then((Response) => {
      console.log("Response", Response);
    });
  };
  //marked for review and next
  const MarkForReviewAndNextBtn = (id) => {
    const body = {
      studentId: currentUser?.id,
      status: "VISITED",
      answer: {
        value: value,
        id: answerId,
      },
    };

    const payload = {
      pathParams: { testId: testId, questionsId: id },
      body,
    };

    dispatch({
      type: "tests/getMarkForReviewAndNext",
      payload,
    }).then((res) => {
      if (res?.status === "ok") {
        getAllQuestionsStatus();
      }
    });
  };

  //submitTest
  const submitTests = (id) => {
    const payload = {
      pathParams: {
        testId: testId,
        questionsId: id,
        studentId: currentUser.id,
      },
    };

    dispatch({
      type: "tests/getSubmitTests",
      payload,
    }).then((Respon) => {
      console.log("Respon", Respon);
    });
  };

  // save and next
  const SaveAndNextBtn = (id) => {
    const body = {
      studentId: currentUser?.id,
      status: "VISITED",
      answer: {
        value: value,
        id: answerId,
      },
    };

    const payload = {
      pathParams: { testId: testId, questionsId: id },
      body,
    };

    dispatch({
      type: "tests/getSaveAndNext",
      payload,
    }).then((Response) => {
      console.log("Response", Response);
    });
  };

  return (
    <>
      <div>
        <Page
          className="flex justify-center items-center"
          title={
            <h1 className="text-xl font-semibold text-blue-900 capitalize flex justify-center items-center">
              {performTestsById?.name}
            </h1>
          }
          subTitle={
            <div
              className="2xl:flex 2xl:flex-row w-full 2xl:justify-between 2xl:items-center 
            xl:flex xl:flex-row  xl:justify-between xl:items-center 
            lg:flex lg:flex-row    lg:justify-between lg:items-center 
            md:flex md:flex-row   md:justify-between md:items-center 
            sm:flex sm:flex-row   sm:justify-between sm:items-center 
            xs:flex-col xs:justify-center xs:items-center  xxs:flex-col xxs:justify-center xxs:items-center"
            >
              <div>
                {" "}
                <p
                  className="text-sm font-normal flex justify-center items-center text-gray-800"
                  onClick={() =>
                    getAllQuestionsStatus(
                      performTestsById?.questions?.[currentQuestions - 1]?.id
                    )
                  }
                >
                  Assess your test here.
                </p>
              </div>

              <div className="text-xl text-blue-900 font-bold flex  gap-2 justify-center items-center ">
                <span className="mb-2">{AppIcons.ClockFill()}</span>

                {isShowInstructions === false ? (
                  <TimerOfPerformTest
                    timer={timer}
                    setTimer={setTimer}
                    setIsShowSubmittedTestModal={setIsShowSubmittedTestModal}
                  />
                ) : (
                  ""
                )}
                {/* </div> */}
              </div>

              <div className="flex justify-center items-center gap-1  text-blue-900 font-bold 2xl:text-xl xs:text-lg">
                <p>Total Marks :</p>
                <p>{performTestsById?.totalMarks}</p>
              </div>
            </div>
          }
        >
          <div
            className="bg-white 2xl:flex xl:flex lg:flex md:flex sm:flex xs:flex xxs:flex justify-between
             2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse 
            
            "
            style={{ minHeight: "61vh" }}
          >
            {/* <div
              className="flex justify-between w-full
          2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col-reverse xxs:flex-col-reverse
            "
            > */}
            <div className=" 2xl:w-4/5 lg:w-3/4  md:w-5/12">
              <Form form={form} onFinish={null} onFinishFailed={null}>
                <div className=" flex py-8 ">
                  <div className="h-full w-full py-5 ml-12 ">
                    {/* <p className="text-xl px-5 mb-0 py-3 px-4 font-bold ">{}</p> */}
                    <p className="text-xl  px-5  text-blue-900 font-bold mb-0  p-4  ">
                      <span className="">{currentQuestions}.</span>
                      {
                        performTestsById?.questions?.[currentQuestions - 1]
                          ?.name
                      }
                      {/* {testData?.questions?.[currentQuestions - 1]?.name} */}
                    </p>
                    <div className=" px-9 py-2 ">
                      <Form.Item
                        name="answer"
                        rules={[
                          {
                            required: answerId === undefined ? true : null,
                            message: "Please enter ",
                          },
                        ]}
                        noStyle
                      >
                        <Radio.Group onChange={onRadioChange} value={value}>
                          <Space size="middle" direction="vertical">
                            {performTestsById?.questions?.[
                              currentQuestions - 1
                            ] &&
                              createQuestion(
                                performTestsById?.questions?.[
                                  currentQuestions - 1
                                ]
                              )}
                          </Space>
                        </Radio.Group>
                      </Form.Item>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex w-full  px-5 mt-56 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs-flex-col xxs-flex-col">
                  <div className="w-full ml-14 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs-flex-col xxs-flex-col">
                    <Button
                      type="primary"
                      className="mr-8"
                      onClick={() => {
                        MarkForReviewAndNextBtn(
                          performTestsById?.questions?.[currentQuestions - 1]
                            ?.id
                        );
                        setValue(0);
                        setCurrentQuestions(currentQuestions + 1);

                        // setArrayOfTotalNumberOfQuestions((prev) =>
                        //   prev?.map((item) => {
                        //     if (
                        //       item?.numberId === testData?.questions?.[currentQuestions - 1]?.id
                        //     ) {
                        //       return {
                        //         ...item,
                        //         answerChecked: value === 0 ? 'Marked' : 'Marked And Answer',
                        //       };
                        //     } else {
                        //       return item;
                        //     }
                        //   }),
                        // );
                      }}
                    >
                      Mark for Review & Next
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => {
                        setValue(0);
                        ClearResponse(
                          performTestsById?.questions?.[currentQuestions - 1]
                            ?.id
                        );
                      }}
                    >
                      Clear Response
                    </Button>
                  </div>
                  <div className="flex flex-end">
                    {" "}
                    <Button
                      type="primary"
                      onClick={() => {
                        if (value !== undefined) {
                          SaveAndNextBtn(
                            performTestsById?.questions?.[currentQuestions - 1]
                              ?.id
                          );

                          // setArrayOfTotalNumberOfQuestions((prev) =>
                          //   prev?.map((item) => {
                          //     if (
                          //       item?.numberId === testData?.questions?.[currentQuestions - 1]?.id
                          //     ) {
                          //       return {
                          //         ...item,
                          //         answerChecked: value === 1 ? 'Answered' : 'Not Answered ',
                          //       };
                          //     } else {
                          //       return item;
                          //     }
                          //   }),
                          // );
                          {
                            SaveAndNextBtn(
                              performTestsById?.questions?.[
                                currentQuestions - 1
                              ]?.id
                            );
                            setCurrentQuestions(currentQuestions + 1);

                            // setArrayOfTotalNumberOfQuestions((prev) =>
                            //   prev?.map((item) => {
                            //     if (
                            //       item?.numberId === testData?.questions?.[currentQuestions - 1]?.id
                            //     ) {
                            //       return {
                            //         ...item,
                            //         answerChecked: value === 1 ? 'Answered' : 'Not Answered ',
                            //       };
                            //     } else {
                            //       return item;
                            //     }
                            //   }),
                            // );
                          }
                        } else {
                          message.error(
                            "Please select option for submit answer"
                          );
                        }
                      }}
                    >
                      Save & Next
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
            <div
              className=" bg-blue-50 h-max-content pt-2 2xl:w-96 md:w-1/2"
              style={{
                borderLeft: "1px solid rgb(2 132 199)",
                borderRight: "1px solid rgb(2 132 199)",
              }}
            >
              <SideCardOfDetails
                arrayOfTotalNumberOfQuestions={arrayOfTotalNumberOfQuestions}
                DetailsOfAnswers={DetailsOfAnswers}
                // numberBgColor={numberBgColor}
                setIsAnswered={setIsAnswered}
                isAnswered={isAnswered}
                setCurrentQuestions={setCurrentQuestions}
                setArrayOfTotalNumberOfQuestions={
                  setArrayOfTotalNumberOfQuestions
                }
                setVisible={setVisible}
                submitTests={submitTests}
                performTestsById={performTestsById}
                answerNumber={answerNumber}
                setAnswerNumber={setAnswerNumber}
              />
            </div>
            {/* </div> */}

            {/* <div className="flex justify-end pb-4 pr-4"></div> */}
          </div>
          {/* <Pagination
            className="flex justify-end "
            style={{ marginTop: '15px' }}
            current={currentQuestions}
            onChange={(pageNo) => {
              setValue(0);
              // history.push(`/tests/${testId}/perform?question=${pageNo}`);
              setCurrentQuestions(pageNo);
            }}
            defaultPageSize={1}
            // total={testRecordById?.questions?.length}
            total={testData?.questions?.length}
          /> */}
        </Page>
      </div>
      <ModalOfSubmitTest setVisible={setVisible} visible={visible} />
      <InstructionsOfPerformTest
        isShowInstructions={isShowInstructions}
        setIsShowInstructions={setIsShowInstructions}
      />
      {timer === "00:00:00" ? (
        <SubmittedTestModal
          timer={timer}
          isShowSubmittedTestModal={isShowSubmittedTestModal}
          setIsShowSubmittedTestModal={setIsShowSubmittedTestModal}
          s
        />
      ) : (
        ""
      )}
    </>
  );
};

export default connect(({ tests, user }) => ({
  performTestsById: tests.performTestsById,
  currentUser: user?.currentUser,
}))(PerformTest);




//side card
import React, { useState } from 'react';
import profilePhoto from './../../../../../../../../src/assets/img/User.png';
import { Button } from 'antd';
import { useEffect } from 'react';

const SideCardOfDetails = ({
  arrayOfTotalNumberOfQuestions,
  DetailsOfAnswers,
  // numberBgColor,
  // isAnswered,
  setCurrentQuestions,
  // setArrayOfTotalNumberOfQuestions,
  setVisible,
  submitTests,
  performTestsById,
  answerNumber,
  setAnswerNumber,
}) => {
  console.log('answerNumber', answerNumber);
  console.log('performTestsById', performTestsById);
  // const [first, setfirst] = useState();

  useEffect(() => {
    if (performTestsById !== undefined) {
      setAnswerNumber(performTestsById?.answerStatus);
    }
  }, [performTestsById]);

  const getNumberBackgroundColor = (items) => {
    switch (items?.answerCategory) {
      case 'Answered':
        return 'rgb(34 197 94)';

      case 'Marked':
        return 'rgb(168 85 247)';

      case 'Not Answered ':
        return 'rgb(239 68 68)';

      case 'Marked and Answered':
        return 'rgb(59 130 246)';

      case 'Not Visited':
        return 'white';

      default:
        return 'white';
    }
  };

  const getNumberTextColor = (items) => {
    switch (items?.answerCategory) {
      case 'Answered':
        return 'white';

      case 'Marked':
        return 'white';

      case 'Not Answered ':
        return 'white';

      case 'Marked and Answered':
        return 'white';

      case 'Not Visited':
        return 'black';

      default:
        return 'black';
    }
  };

  const getAnswerCategoryColor = (items) => {
    switch (items?.answerCategory) {
      case 'Answered':
        return 'rgb(34 197 94)';

      case 'Marked':
        return 'rgb(168 85 247)';

      case 'Not Answered ':
        return 'rgb(239 68 68)';

      case 'Marked and Answered':
        return 'rgb(59 130 246)';

      case 'Not Visited':
        return 'black';

      default:
        return 'black';
    }
  };

  // const getNumberIdColor = (data) => {
  //   switch (data?.answerChecked) {
  //     case 'Answered':
  //       return 'white';

  //     case 'Marked':
  //       return 'white';

  //     case 'Not Answered ':
  //       return 'white';

  //     case 'Marked and Answered':
  //       return 'white';

  //     case 'Not Visited':
  //       return 'black';

  //     default:
  //       return 'black';
  //   }
  // };

  // const getNumberIdBackgroundColor = (data) => {
  //   switch (data?.answerChecked) {
  //     case 'Answered':
  //       return 'green';

  //     case 'Marked':
  //       return 'rgb(168 85 247)';

  //     case 'Not Answered ':
  //       return 'rgb(239 68 68)';

  //     case 'Marked And Answer':
  //       return 'rgb(59 130 246)';

  //     case 'Not Visited':
  //       return 'white';

  //     default:
  //       return 'white';
  //   }
  // };

  // const getNumberIdRadius = (data) => {
  //   switch (data?.answerChecked) {
  //     case 'Answered':
  //       return '100%';

  //     case 'Marked':
  //       return '100%';

  //     case 'Not Answered ':
  //       return '100%';

  //     case 'Not Visited':
  //       return '100%';

  //     case 'Marked And Answer':
  //       return '100%';

  //     default:
  //       return '5px';
  //   }
  // };

  // const getNumberIdBorder = (data) => {
  //   switch (data?.answerChecked) {
  //     case 'Answered':
  //       return 'none';

  //     case 'Marked':
  //       return 'none';

  //     case 'Not Answered ':
  //       return 'none';

  //     case 'Not Visited':
  //       return '1px solid rgb(209 213 219)';

  //     case 'Marked And Answer':
  //       return 'none';

  //     default:
  //       return '1px solid rgb(209 213 219)';
  //   }
  // };

  return (
    <div>
      <div className="flex   items-center mb-2 pl-3">
        {' '}
        <div>
          <img
            src={profilePhoto}
            alt="profilePhoto"
            className="w-10 mr-4 bg-gray-200 rounded-full  p-2"
          />
        </div>
        <div className="text-base font-semibold text-blue-900 ">Student Name</div>{' '}
      </div>
      <div className="grid  grid-cols-2 px-5 py-4 gap-y-2 w-full bg-white justify-center items-center">
        {DetailsOfAnswers?.map((items) => (
          <div
            //  key={items}
            className="flex items-center  "
          >
            <div
              className="py-1  px-2 rounded-full mr-2"
              style={{
                backgroundColor: getNumberBackgroundColor(items),
                color: getNumberTextColor(items),
              }}
            >
              {items?.number}
            </div>
            <div
              style={{
                color: getAnswerCategoryColor(items),
              }}
              className="text-xs"
            >
              {items?.answerCategory}
            </div>
          </div>
        ))}
      </div>
      <div className="px-3 py-2 text-base font-bold bg-gray-200">
        SECTION : <span className=" text-base font-semibold">Subject Test</span>
      </div>
      <div
        style={{
          display: 'grid',
          grid: '25px / auto auto auto auto auto',
          gridGap: '15px',
          padding: '12px',
        }}
      >
        {answerNumber?.map((item) => (
          <div
            // key={data?.numberId}

            onClick={() => {
              // setfirst(data?.numberId);
              setCurrentQuestions(item?.numberId);
              // setArrayOfTotalNumberOfQuestions((prev) => [
              //   ...prev,
              //   { answerChecked: 'Not Answered ' },
              // ]);
            }}
            // className={`${numberBgColor.includes(data) ? 'bg-blue-700' : ''}`}
            style={{
              textAlign: 'center',
              fontsize: '30px',
              padding: '2px 0px 2px 0px',
              color: 'black',
              // backgroundColor: getNumberIdBackgroundColor(data),
              // color: getNumberIdColor(data),
              // borderRadius: getNumberIdRadius(data),
              // border: getNumberIdBorder(data),
              // data?.answerChecked === 'Not Answered '
              //   ? 'none'
              //   : '1px solid rgb(209 213 219)' && data?.answerChecked === 'Answered'
              //   ? 'none'
              //   : '1px solid rgb(209 213 219)' && data?.answerChecked === 'Marked'
              //   ? 'none'
              //   : '1px solid rgb(209 213 219)' && data?.answerChecked === 'Marked And Answer '
              //   ? 'none'
              //   : ' 1px solid rgb(209 213 219)',
            }}
          >
            {item?.numberId}
          </div>
        ))}
      </div>{' '}
      <div className="flex justify-center items-center mt-4">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
            submitTests();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SideCardOfDetails;
