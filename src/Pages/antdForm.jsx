import { Card, Form, Input } from "antd";
import React, { useState } from "react";

const BreakDown = () => {
  const [form] = Form.useForm();

  const cleanInput = (inp) => {
    if (inp) {
      return inp.replace(/(?!-)[^0-9.]/g, "").replace("-", "");
    } else {
      return "";
    }
  };
  const [val, setVal] = useState({
    piecesOneThousand: "",
    piecesFiveHundred: "",
    piecesTwoHundred: "",
    piecesHundred: "",
    piecesFifty: "",
    piecesTwenty: "",
    piecesTen: "",
    piecesFive: "",
    piecesOne: "",
  });

  console.log("val", val);

  const totalPesoThousand = () => {
    const totalPiecesThousand = Number(val?.piecesOneThousand);
    const amountTotalPesoThousand = Number(totalPiecesThousand * 1000);
    if (amountTotalPesoThousand === 0) {
      return "";
    } else return amountTotalPesoThousand;
  };

  const totalPesoFiveHundred = () => {
    const totalPiecesFiveHundred = Number(val?.piecesFiveHundred);
    const amountTotalPesoFiveHundred = Number(totalPiecesFiveHundred * 500);
    if (amountTotalPesoFiveHundred === 0) {
      return "";
    } else return amountTotalPesoFiveHundred;
  };

  const totalPesoTwoHundred = () => {
    const totalPiecesTwoHundred = Number(val?.piecesTwoHundred);
    const amountTotalPesoTwoHundred = Number(totalPiecesTwoHundred * 200);
    if (amountTotalPesoTwoHundred === 0) {
      return "";
    } else return amountTotalPesoTwoHundred;
  };

  const totalPesoHundred = () => {
    const totalPiecesHundred = Number(val?.piecesHundred);
    const amountTotalPesoHundred = Number(totalPiecesHundred * 100);
    if (amountTotalPesoHundred === 0) {
      return "";
    } else return amountTotalPesoHundred;
  };

  const totalPesoFifty = () => {
    const totalPiecesFifty = Number(val?.piecesFifty);
    const amountTotalPesoFifty = Number(totalPiecesFifty * 50);
    if (amountTotalPesoFifty === 0) {
      return "";
    } else return amountTotalPesoFifty;
  };

  const totalPesoTwenty = () => {
    const totalPiecesTwenty = Number(val?.piecesTwenty);
    const amountTotalPesoTwenty = Number(totalPiecesTwenty * 20);
    if (amountTotalPesoTwenty === 0) {
      return "";
    } else return amountTotalPesoTwenty;
  };

  const totalPesoTen = () => {
    const totalPiecesTen = Number(val?.piecesTen);
    const amountTotalPesoTen = Number(totalPiecesTen * 10);
    if (amountTotalPesoTen === 0) {
      return "";
    } else return amountTotalPesoTen;
  };

  const totalPesoFive = () => {
    const totalPiecesFive = Number(val?.piecesFive);
    const amountTotalPesoFive = Number(totalPiecesFive * 5);
    if (amountTotalPesoFive === 0) {
      return "";
    } else return amountTotalPesoFive;
  };

  const totalPesoOne = () => {
    const totalPiecesOne = Number(val?.piecesOne);
    const amountTotalPesoOne = Number(totalPiecesOne * 1);
    if (amountTotalPesoOne === 0) {
      return "";
    } else return amountTotalPesoOne;
  };

  const totalBalance = () => {
    const balTotalPesoThousand = totalPesoThousand();
    const balTotalPesoFiveHundred = totalPesoFiveHundred();
    const balTotalPesoTwoHundred = totalPesoTwoHundred();
    const balTotalPesoHundred = totalPesoHundred();
    const balTotalPesoFifty = totalPesoFifty();
    const balTotalPesoTwenty = totalPesoTwenty();
    const balTotalPesoTen = totalPesoTen();
    const balTotalPesoFive = totalPesoFive();
    const balTotalPesoOne = totalPesoOne();

    const finalBalance = Number(
      Number(balTotalPesoThousand) +
        Number(balTotalPesoFiveHundred) +
        Number(balTotalPesoTwoHundred) +
        Number(balTotalPesoHundred) +
        Number(balTotalPesoFifty) +
        Number(balTotalPesoTwenty) +
        Number(balTotalPesoTen) +
        Number(balTotalPesoFive) +
        Number(balTotalPesoOne)
    );

    if (finalBalance === 0) {
      return "";
    } else return finalBalance;
  };

  const commonCalc = () => {
    let fieldDetails = form.getFieldsValue();
    console.log("fieldDetails", fieldDetails);
    // let newData = Object.keys(fieldDetails?.resultField);
    let newData = Object.values(fieldDetails?.resultField);

    console.log("newData", newData);
  };
  return (
    <div className="bg-white shadow rounded mt-5">
      <Form
        layout="vertical"
        hideRequiredMark
        autoComplete="off"
        colon={false}
        // onFinish={(values) => {}}
        form={form}
      >
        <Card>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            Cash Break Down Details
          </div>
          <div className="px-16 py-4 w-full">
            {" "}
            <table style={{ width: "100%" }}>
              <tr className="w-full bg-gray-100 ">
                <th className="border p-2 w-1/3">Domination</th>
                <th className="border p-2 w-1/3">Pieces</th>
                <th className="border p-2 w-1/3">Peso</th>
              </tr>
              <tr>
                <td className="border p-2  bg-gray-100 text-center font-medium">
                  1000 *
                </td>
                <td className="border  ">
                  <div className="h-12 px-2 py-1 ">
                    <Form.Item name="piecesOneThousand">
                      <Input
                        size="large"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          console.log("value", value);
                          // setVal((prev) => {
                          //   return { ...prev, piecesOneThousand: value };
                          // });

                          // form.setFieldsValue({ ...value });

                          form.setFieldsValue({
                            piecesOneThousand: value,
                            resultField: { pesoThousand: 1000 * value },
                          });
                          commonCalc();
                          // let thousandVal = 1000 * value;
                          // let fiveHundVal = form.getFieldValue('pesoFiveHundred');
                          // let fiveHundVal = form.getFieldsValue();
                          // console.log('fiveHundVal', fiveHundVal);
                          // pesoTotal
                        }}
                        // value={val?.piecesOneThousand}
                        type={"text"}
                        autocomplete="off"
                        className="text-center"
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={["resultField", "pesoThousand"]}>
                      <Input
                        className="text-center"
                        placeholder=""
                        size="large"
                        // value={totalPesoThousand()}
                        type={"text"}
                        autocomplete="off"
                        disabled={true}
                        prefix={"₱"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">
                  500 *
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFiveHundred">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFiveHundred: value };
                          // });
                          form.setFieldValue({
                            piecesFiveHundred: value,
                            resultField: { pesoFiveHundred: 500 * value },
                          });
                          commonCalc();
                        }}
                        // value={val?.piecesFiveHundred}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={["resultField", "pesoFiveHundred"]}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFiveHundred()}
                        type={"text"}

                        // prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">
                  200 *
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwoHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwoHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwoHundred}
                        autocomplete="off"
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={["resultField", "pesoTwoHundred"]}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwoHundred()}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
              </tr>{" "}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">
                  100 *
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesHundred}
                        type={"text"}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={["resultField", "pesoHundred"]}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoHundred()}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
              </tr>{" "}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">
                  50 *
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFifty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFifty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesFifty}
                        type={"text"}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={["resultField", "pesoFifty"]}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFifty()}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
              </tr>{" "}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">
                  20 *
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwenty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwenty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwenty}
                        type={"text"}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={["resultField", "pesoTwenty"]}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwenty()}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
              </tr>{" "}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">
                  10 *
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTen">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTen: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTen}
                        autocomplete="off"
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={["resultField", "pesoTen"]}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTen()}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
              </tr>{" "}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">
                  5 *
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFive">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFive: value };
                          // });
                          commonCalc();
                        }}
                        autocomplete="off"
                        // value={val?.piecesFive}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={["resultField", "pesoFive"]}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFive()}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
              </tr>{" "}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">
                  1 *
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesOne">
                      <Input
                        autocomplete="off"
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesOne: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesOne}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
                <td className="border">
                  {" "}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={["resultField", "pesoOne"]}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoOne()}
                        type={"text"}
                      />
                    </Form.Item>
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}import { Card, Form, Input } from 'antd';
                  import React, { useState } from 'react';
                  
                  const BreakDown = () => {
                    const [form] = Form.useForm();
                  
                    const cleanInput = (inp) => {
                      if (inp) {
                        return inp.replace(/(?!-)[^0-9.]/g, '').replace('-', '');
                      } else {
                        return '';
                      }
                    };
                    const [val, setVal] = useState({
                      piecesOneThousand: '',
                      piecesFiveHundred: '',
                      piecesTwoHundred: '',
                      piecesHundred: '',
                      piecesFifty: '',
                      piecesTwenty: '',
                      piecesTen: '',
                      piecesFive: '',
                      piecesOne: '',
                    });
                  
                    console.log('val', val);
                  
                    const totalPesoThousand = () => {
                      const totalPiecesThousand = Number(val?.piecesOneThousand);
                      const amountTotalPesoThousand = Number(totalPiecesThousand * 1000);
                      if (amountTotalPesoThousand === 0) {
                        return '';
                      } else return amountTotalPesoThousand;
                    };
                  
                    const totalPesoFiveHundred = () => {
                      const totalPiecesFiveHundred = Number(val?.piecesFiveHundred);
                      const amountTotalPesoFiveHundred = Number(totalPiecesFiveHundred * 500);
                      if (amountTotalPesoFiveHundred === 0) {
                        return '';
                      } else return amountTotalPesoFiveHundred;
                    };
                  
                    const totalPesoTwoHundred = () => {
                      const totalPiecesTwoHundred = Number(val?.piecesTwoHundred);
                      const amountTotalPesoTwoHundred = Number(totalPiecesTwoHundred * 200);
                      if (amountTotalPesoTwoHundred === 0) {
                        return '';
                      } else return amountTotalPesoTwoHundred;
                    };
                  
                    const totalPesoHundred = () => {
                      const totalPiecesHundred = Number(val?.piecesHundred);
                      const amountTotalPesoHundred = Number(totalPiecesHundred * 100);
                      if (amountTotalPesoHundred === 0) {
                        return '';
                      } else return amountTotalPesoHundred;
                    };
                  
                    const totalPesoFifty = () => {
                      const totalPiecesFifty = Number(val?.piecesFifty);
                      const amountTotalPesoFifty = Number(totalPiecesFifty * 50);
                      if (amountTotalPesoFifty === 0) {
                        return '';
                      } else return amountTotalPesoFifty;
                    };
                  
                    const totalPesoTwenty = () => {
                      const totalPiecesTwenty = Number(val?.piecesTwenty);
                      const amountTotalPesoTwenty = Number(totalPiecesTwenty * 20);
                      if (amountTotalPesoTwenty === 0) {
                        return '';
                      } else return amountTotalPesoTwenty;
                    };
                  
                    const totalPesoTen = () => {
                      const totalPiecesTen = Number(val?.piecesTen);
                      const amountTotalPesoTen = Number(totalPiecesTen * 10);
                      if (amountTotalPesoTen === 0) {
                        return '';
                      } else return amountTotalPesoTen;
                    };
                  
                    const totalPesoFive = () => {
                      const totalPiecesFive = Number(val?.piecesFive);
                      const amountTotalPesoFive = Number(totalPiecesFive * 5);
                      if (amountTotalPesoFive === 0) {
                        return '';
                      } else return amountTotalPesoFive;
                    };
                  
                    const totalPesoOne = () => {
                      const totalPiecesOne = Number(val?.piecesOne);
                      const amountTotalPesoOne = Number(totalPiecesOne * 1);
                      if (amountTotalPesoOne === 0) {
                        return '';
                      } else return amountTotalPesoOne;
                    };
                  
                    const totalBalance = () => {
                      const balTotalPesoThousand = totalPesoThousand();
                      const balTotalPesoFiveHundred = totalPesoFiveHundred();
                      const balTotalPesoTwoHundred = totalPesoTwoHundred();
                      const balTotalPesoHundred = totalPesoHundred();
                      const balTotalPesoFifty = totalPesoFifty();
                      const balTotalPesoTwenty = totalPesoTwenty();
                      const balTotalPesoTen = totalPesoTen();
                      const balTotalPesoFive = totalPesoFive();
                      const balTotalPesoOne = totalPesoOne();
                  
                      const finalBalance = Number(
                        Number(balTotalPesoThousand) +
                          Number(balTotalPesoFiveHundred) +
                          Number(balTotalPesoTwoHundred) +
                          Number(balTotalPesoHundred) +
                          Number(balTotalPesoFifty) +
                          Number(balTotalPesoTwenty) +
                          Number(balTotalPesoTen) +
                          Number(balTotalPesoFive) +
                          Number(balTotalPesoOne),
                      );
                  
                      if (finalBalance === 0) {
                        return '';
                      } else return finalBalance;
                    };
                  
                    const commonCalc = () => {
                      let fieldDetails = form.getFieldsValue();
                      console.log('fieldDetails', fieldDetails);
                      // let newData = Object.keys(fieldDetails?.resultField);
                      let newData = Object.values(fieldDetails?.resultField);
                  
                      console.log('newData', newData);
                    };
                    return (
                      <div className="bg-white shadow rounded mt-5">
                        <Form
                          layout="vertical"
                          hideRequiredMark
                          autoComplete="off"
                          colon={false}
                          // onFinish={(values) => {}}
                          form={form}
                        >
                          <Card>
                            <div style={{ fontSize: '20px', fontWeight: '500' }}>Cash Break Down Details</div>
                            <div className="px-16 py-4 w-full">
                              {' '}
                              <table style={{ width: '100%' }}>
                                <tr className="w-full bg-gray-100 ">
                                  <th className="border p-2 w-1/3">Domination</th>
                                  <th className="border p-2 w-1/3">Pieces</th>
                                  <th className="border p-2 w-1/3">Peso</th>
                                </tr>
                                <tr>
                                  <td className="border p-2  bg-gray-100 text-center font-medium">1000 *</td>
                                  <td className="border  ">
                                    <div className="h-12 px-2 py-1 ">
                                      <Form.Item name="piecesOneThousand">
                                        <Input
                                          size="large"
                                          onChange={(e) => {
                                            const value = cleanInput(e.target.value.toString());
                                            console.log('value', value);
                                            // setVal((prev) => {
                                            //   return { ...prev, piecesOneThousand: value };
                                            // });
                  
                                            // form.setFieldsValue({ ...value });
                  
                                            form.setFieldsValue({
                                              piecesOneThousand: value,
                                              resultField: { pesoThousand: 1000 * value },
                                            });
                                            commonCalc();
                                            // let thousandVal = 1000 * value;
                                            // let fiveHundVal = form.getFieldValue('pesoFiveHundred');
                                            // let fiveHundVal = form.getFieldsValue();
                                            // console.log('fiveHundVal', fiveHundVal);
                                            // pesoTotal
                                          }}
                                          // value={val?.piecesOneThousand}
                                          type={'text'}
                                          autocomplete="off"
                                          className="text-center"
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name={['resultField', 'pesoThousand']}>
                                        <Input
                                          className="text-center"
                                          placeholder=""
                                          size="large"
                                          // value={totalPesoThousand()}
                                          type={'text'}
                                          autocomplete="off"
                                          disabled={true}
                                          prefix={'₱'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border p-2 text-center bg-gray-100 font-medium">500 *</td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name="piecesFiveHundred">
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          onChange={(e) => {
                                            const value = cleanInput(e.target.value.toString());
                                            // setVal((prev) => {
                                            //   return { ...prev, piecesFiveHundred: value };
                                            // });
                                            form.setFieldValue({
                                              piecesFiveHundred: value,
                                              resultField: { pesoFiveHundred: 500 * value },
                                            });
                                            commonCalc();
                                          }}
                                          // value={val?.piecesFiveHundred}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name={['resultField', 'pesoFiveHundred']}>
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          // value={totalPesoFiveHundred()}
                                          type={'text'}
                  
                                          // prefix={'₱'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border p-2 text-center bg-gray-100 font-medium">200 *</td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name="piecesTwoHundred">
                                        <Input
                                          size="large"
                                          className="text-center"
                                          onChange={(e) => {
                                            const value = cleanInput(e.target.value.toString());
                                            // setVal((prev) => {
                                            //   return { ...prev, piecesTwoHundred: value };
                                            // });
                                            commonCalc();
                                          }}
                                          // value={val?.piecesTwoHundred}
                                          autocomplete="off"
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name={['resultField', 'pesoTwoHundred']}>
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          // value={totalPesoTwoHundred()}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>{' '}
                                <tr>
                                  <td className="border p-2 text-center bg-gray-100 font-medium">100 *</td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name="piecesHundred">
                                        <Input
                                          size="large"
                                          className="text-center"
                                          onChange={(e) => {
                                            const value = cleanInput(e.target.value.toString());
                                            // setVal((prev) => {
                                            //   return { ...prev, piecesHundred: value };
                                            // });
                                            commonCalc();
                                          }}
                                          // value={val?.piecesHundred}
                                          type={'text'}
                                          autocomplete="off"
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name={['resultField', 'pesoHundred']}>
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          // value={totalPesoHundred()}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>{' '}
                                <tr>
                                  <td className="border p-2 text-center bg-gray-100 font-medium">50 *</td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name="piecesFifty">
                                        <Input
                                          size="large"
                                          className="text-center"
                                          onChange={(e) => {
                                            const value = cleanInput(e.target.value.toString());
                                            // setVal((prev) => {
                                            //   return { ...prev, piecesFifty: value };
                                            // });
                                            commonCalc();
                                          }}
                                          // value={val?.piecesFifty}
                                          type={'text'}
                                          autocomplete="off"
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name={['resultField', 'pesoFifty']}>
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          // value={totalPesoFifty()}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>{' '}
                                <tr>
                                  <td className="border p-2 text-center bg-gray-100 font-medium">20 *</td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name="piecesTwenty">
                                        <Input
                                          size="large"
                                          className="text-center"
                                          onChange={(e) => {
                                            const value = cleanInput(e.target.value.toString());
                                            // setVal((prev) => {
                                            //   return { ...prev, piecesTwenty: value };
                                            // });
                                            commonCalc();
                                          }}
                                          // value={val?.piecesTwenty}
                                          type={'text'}
                                          autocomplete="off"
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name={['resultField', 'pesoTwenty']}>
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          // value={totalPesoTwenty()}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>{' '}
                                <tr>
                                  <td className="border p-2 text-center bg-gray-100 font-medium">10 *</td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name="piecesTen">
                                        <Input
                                          size="large"
                                          className="text-center"
                                          onChange={(e) => {
                                            const value = cleanInput(e.target.value.toString());
                                            // setVal((prev) => {
                                            //   return { ...prev, piecesTen: value };
                                            // });
                                            commonCalc();
                                          }}
                                          // value={val?.piecesTen}
                                          autocomplete="off"
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name={['resultField', 'pesoTen']}>
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          // value={totalPesoTen()}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>{' '}
                                <tr>
                                  <td className="border p-2 text-center bg-gray-100 font-medium">5 *</td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name="piecesFive">
                                        <Input
                                          size="large"
                                          className="text-center"
                                          onChange={(e) => {
                                            const value = cleanInput(e.target.value.toString());
                                            // setVal((prev) => {
                                            //   return { ...prev, piecesFive: value };
                                            // });
                                            commonCalc();
                                          }}
                                          autocomplete="off"
                                          // value={val?.piecesFive}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name={['resultField', 'pesoFive']}>
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          // value={totalPesoFive()}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>{' '}
                                <tr>
                                  <td className="border p-2 text-center bg-gray-100 font-medium">1 *</td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name="piecesOne">
                                        <Input
                                          autocomplete="off"
                                          size="large"
                                          className="text-center"
                                          onChange={(e) => {
                                            const value = cleanInput(e.target.value.toString());
                                            // setVal((prev) => {
                                            //   return { ...prev, piecesOne: value };
                                            // });
                                            commonCalc();
                                          }}
                                          // value={val?.piecesOne}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name={['resultField', 'pesoOne']}>
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          // value={totalPesoOne()}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={2} className="border p-2 text-center bg-gray-100 font-medium">
                                    Total
                                  </td>{' '}
                                  <td className="border">
                                    {' '}
                                    <div className="h-12 px-2 py-1">
                                      <Form.Item name="pesoTotal">
                                        <Input
                                          size="large"
                                          autocomplete="off"
                                          className="text-center"
                                          // value={totalBalance()}
                                          type={'text'}
                                        />
                                      </Form.Item>
                                    </div>{' '}
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Card>
                        </Form>
                      </div>
                    );
                  };
                  
                  export default BreakDown;
import { Card, Form, Input } from 'antd';
import React, { useState } from 'react';

const BreakDown = () => {
  const [form] = Form.useForm();

  const cleanInput = (inp) => {
    if (inp) {
      return inp.replace(/(?!-)[^0-9.]/g, '').replace('-', '');
    } else {
      return '';
    }
  };
  const [val, setVal] = useState({
    piecesOneThousand: '',
    piecesFiveHundred: '',
    piecesTwoHundred: '',
    piecesHundred: '',
    piecesFifty: '',
    piecesTwenty: '',
    piecesTen: '',
    piecesFive: '',
    piecesOne: '',
  });

  console.log('val', val);

  const totalPesoThousand = () => {
    const totalPiecesThousand = Number(val?.piecesOneThousand);
    const amountTotalPesoThousand = Number(totalPiecesThousand * 1000);
    if (amountTotalPesoThousand === 0) {
      return '';
    } else return amountTotalPesoThousand;
  };

  const totalPesoFiveHundred = () => {
    const totalPiecesFiveHundred = Number(val?.piecesFiveHundred);
    const amountTotalPesoFiveHundred = Number(totalPiecesFiveHundred * 500);
    if (amountTotalPesoFiveHundred === 0) {
      return '';
    } else return amountTotalPesoFiveHundred;
  };

  const totalPesoTwoHundred = () => {
    const totalPiecesTwoHundred = Number(val?.piecesTwoHundred);
    const amountTotalPesoTwoHundred = Number(totalPiecesTwoHundred * 200);
    if (amountTotalPesoTwoHundred === 0) {
      return '';
    } else return amountTotalPesoTwoHundred;
  };

  const totalPesoHundred = () => {
    const totalPiecesHundred = Number(val?.piecesHundred);
    const amountTotalPesoHundred = Number(totalPiecesHundred * 100);
    if (amountTotalPesoHundred === 0) {
      return '';
    } else return amountTotalPesoHundred;
  };

  const totalPesoFifty = () => {
    const totalPiecesFifty = Number(val?.piecesFifty);
    const amountTotalPesoFifty = Number(totalPiecesFifty * 50);
    if (amountTotalPesoFifty === 0) {
      return '';
    } else return amountTotalPesoFifty;
  };

  const totalPesoTwenty = () => {
    const totalPiecesTwenty = Number(val?.piecesTwenty);
    const amountTotalPesoTwenty = Number(totalPiecesTwenty * 20);
    if (amountTotalPesoTwenty === 0) {
      return '';
    } else return amountTotalPesoTwenty;
  };

  const totalPesoTen = () => {
    const totalPiecesTen = Number(val?.piecesTen);
    const amountTotalPesoTen = Number(totalPiecesTen * 10);
    if (amountTotalPesoTen === 0) {
      return '';
    } else return amountTotalPesoTen;
  };

  const totalPesoFive = () => {
    const totalPiecesFive = Number(val?.piecesFive);
    const amountTotalPesoFive = Number(totalPiecesFive * 5);
    if (amountTotalPesoFive === 0) {
      return '';
    } else return amountTotalPesoFive;
  };

  const totalPesoOne = () => {
    const totalPiecesOne = Number(val?.piecesOne);
    const amountTotalPesoOne = Number(totalPiecesOne * 1);
    if (amountTotalPesoOne === 0) {
      return '';
    } else return amountTotalPesoOne;
  };

  const totalBalance = () => {
    const balTotalPesoThousand = totalPesoThousand();
    const balTotalPesoFiveHundred = totalPesoFiveHundred();
    const balTotalPesoTwoHundred = totalPesoTwoHundred();
    const balTotalPesoHundred = totalPesoHundred();
    const balTotalPesoFifty = totalPesoFifty();
    const balTotalPesoTwenty = totalPesoTwenty();
    const balTotalPesoTen = totalPesoTen();
    const balTotalPesoFive = totalPesoFive();
    const balTotalPesoOne = totalPesoOne();

    const finalBalance = Number(
      Number(balTotalPesoThousand) +
        Number(balTotalPesoFiveHundred) +
        Number(balTotalPesoTwoHundred) +
        Number(balTotalPesoHundred) +
        Number(balTotalPesoFifty) +
        Number(balTotalPesoTwenty) +
        Number(balTotalPesoTen) +
        Number(balTotalPesoFive) +
        Number(balTotalPesoOne),
    );

    if (finalBalance === 0) {
      return '';
    } else return finalBalance;
  };

  const commonCalc = () => {
    let fieldDetails = form.getFieldsValue();
    console.log('fieldDetails', fieldDetails);
    // let newData = Object.keys(fieldDetails?.resultField);
    let newData = Object.values(fieldDetails?.resultField);

    console.log('newData', newData);
  };
  return (
    <div className="bg-white shadow rounded mt-5">
      <Form
        layout="vertical"
        hideRequiredMark
        autoComplete="off"
        colon={false}
        // onFinish={(values) => {}}
        form={form}
      >
        <Card>
          <div style={{ fontSize: '20px', fontWeight: '500' }}>Cash Break Down Details</div>
          <div className="px-16 py-4 w-full">
            {' '}
            <table style={{ width: '100%' }}>
              <tr className="w-full bg-gray-100 ">
                <th className="border p-2 w-1/3">Domination</th>
                <th className="border p-2 w-1/3">Pieces</th>
                <th className="border p-2 w-1/3">Peso</th>
              </tr>
              <tr>
                <td className="border p-2  bg-gray-100 text-center font-medium">1000 *</td>
                <td className="border  ">
                  <div className="h-12 px-2 py-1 ">
                    <Form.Item name="piecesOneThousand">
                      <Input
                        size="large"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          console.log('value', value);
                          // setVal((prev) => {
                          //   return { ...prev, piecesOneThousand: value };
                          // });

                          // form.setFieldsValue({ ...value });

                          form.setFieldsValue({
                            piecesOneThousand: value,
                            resultField: { pesoThousand: 1000 * value },
                          });
                          commonCalc();
                          // let thousandVal = 1000 * value;
                          // let fiveHundVal = form.getFieldValue('pesoFiveHundred');
                          // let fiveHundVal = form.getFieldsValue();
                          // console.log('fiveHundVal', fiveHundVal);
                          // pesoTotal
                        }}
                        // value={val?.piecesOneThousand}
                        type={'text'}
                        autocomplete="off"
                        className="text-center"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoThousand']}>
                      <Input
                        className="text-center"
                        placeholder=""
                        size="large"
                        // value={totalPesoThousand()}
                        type={'text'}
                        autocomplete="off"
                        disabled={true}
                        prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">500 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFiveHundred">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFiveHundred: value };
                          // });
                          form.setFieldValue({
                            piecesFiveHundred: value,
                            resultField: { pesoFiveHundred: 500 * value },
                          });
                          commonCalc();
                        }}
                        // value={val?.piecesFiveHundred}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFiveHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFiveHundred()}
                        type={'text'}

                        // prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">200 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwoHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwoHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwoHundred}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">100 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesHundred}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">50 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFifty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFifty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesFifty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFifty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFifty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">20 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwenty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwenty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwenty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwenty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwenty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">10 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTen">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTen: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTen}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTen']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTen()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">5 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFive">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFive: value };
                          // });
                          commonCalc();
                        }}
                        autocomplete="off"
                        // value={val?.piecesFive}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFive']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFive()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">1 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesOne">
                      <Input
                        autocomplete="off"
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesOne: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesOne}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoOne']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoOne()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border p-2 text-center bg-gray-100 font-medium">
                  Total
                </td>{' '}
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="pesoTotal">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalBalance()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
            </table>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default BreakDown;
import { Card, Form, Input } from 'antd';
import React, { useState } from 'react';

const BreakDown = () => {
  const [form] = Form.useForm();

  const cleanInput = (inp) => {
    if (inp) {
      return inp.replace(/(?!-)[^0-9.]/g, '').replace('-', '');
    } else {
      return '';
    }
  };
  const [val, setVal] = useState({
    piecesOneThousand: '',
    piecesFiveHundred: '',
    piecesTwoHundred: '',
    piecesHundred: '',
    piecesFifty: '',
    piecesTwenty: '',
    piecesTen: '',
    piecesFive: '',
    piecesOne: '',
  });

  console.log('val', val);

  const totalPesoThousand = () => {
    const totalPiecesThousand = Number(val?.piecesOneThousand);
    const amountTotalPesoThousand = Number(totalPiecesThousand * 1000);
    if (amountTotalPesoThousand === 0) {
      return '';
    } else return amountTotalPesoThousand;
  };

  const totalPesoFiveHundred = () => {
    const totalPiecesFiveHundred = Number(val?.piecesFiveHundred);
    const amountTotalPesoFiveHundred = Number(totalPiecesFiveHundred * 500);
    if (amountTotalPesoFiveHundred === 0) {
      return '';
    } else return amountTotalPesoFiveHundred;
  };

  const totalPesoTwoHundred = () => {
    const totalPiecesTwoHundred = Number(val?.piecesTwoHundred);
    const amountTotalPesoTwoHundred = Number(totalPiecesTwoHundred * 200);
    if (amountTotalPesoTwoHundred === 0) {
      return '';
    } else return amountTotalPesoTwoHundred;
  };

  const totalPesoHundred = () => {
    const totalPiecesHundred = Number(val?.piecesHundred);
    const amountTotalPesoHundred = Number(totalPiecesHundred * 100);
    if (amountTotalPesoHundred === 0) {
      return '';
    } else return amountTotalPesoHundred;
  };

  const totalPesoFifty = () => {
    const totalPiecesFifty = Number(val?.piecesFifty);
    const amountTotalPesoFifty = Number(totalPiecesFifty * 50);
    if (amountTotalPesoFifty === 0) {
      return '';
    } else return amountTotalPesoFifty;
  };

  const totalPesoTwenty = () => {
    const totalPiecesTwenty = Number(val?.piecesTwenty);
    const amountTotalPesoTwenty = Number(totalPiecesTwenty * 20);
    if (amountTotalPesoTwenty === 0) {
      return '';
    } else return amountTotalPesoTwenty;
  };

  const totalPesoTen = () => {
    const totalPiecesTen = Number(val?.piecesTen);
    const amountTotalPesoTen = Number(totalPiecesTen * 10);
    if (amountTotalPesoTen === 0) {
      return '';
    } else return amountTotalPesoTen;
  };

  const totalPesoFive = () => {
    const totalPiecesFive = Number(val?.piecesFive);
    const amountTotalPesoFive = Number(totalPiecesFive * 5);
    if (amountTotalPesoFive === 0) {
      return '';
    } else return amountTotalPesoFive;
  };

  const totalPesoOne = () => {
    const totalPiecesOne = Number(val?.piecesOne);
    const amountTotalPesoOne = Number(totalPiecesOne * 1);
    if (amountTotalPesoOne === 0) {
      return '';
    } else return amountTotalPesoOne;
  };

  const totalBalance = () => {
    const balTotalPesoThousand = totalPesoThousand();
    const balTotalPesoFiveHundred = totalPesoFiveHundred();
    const balTotalPesoTwoHundred = totalPesoTwoHundred();
    const balTotalPesoHundred = totalPesoHundred();
    const balTotalPesoFifty = totalPesoFifty();
    const balTotalPesoTwenty = totalPesoTwenty();
    const balTotalPesoTen = totalPesoTen();
    const balTotalPesoFive = totalPesoFive();
    const balTotalPesoOne = totalPesoOne();

    const finalBalance = Number(
      Number(balTotalPesoThousand) +
        Number(balTotalPesoFiveHundred) +
        Number(balTotalPesoTwoHundred) +
        Number(balTotalPesoHundred) +
        Number(balTotalPesoFifty) +
        Number(balTotalPesoTwenty) +
        Number(balTotalPesoTen) +
        Number(balTotalPesoFive) +
        Number(balTotalPesoOne),
    );

    if (finalBalance === 0) {
      return '';
    } else return finalBalance;
  };

  const commonCalc = () => {
    let fieldDetails = form.getFieldsValue();
    console.log('fieldDetails', fieldDetails);
    // let newData = Object.keys(fieldDetails?.resultField);
    let newData = Object.values(fieldDetails?.resultField);

    console.log('newData', newData);
  };
  return (
    <div className="bg-white shadow rounded mt-5">
      <Form
        layout="vertical"
        hideRequiredMark
        autoComplete="off"
        colon={false}
        // onFinish={(values) => {}}
        form={form}
      >
        <Card>
          <div style={{ fontSize: '20px', fontWeight: '500' }}>Cash Break Down Details</div>
          <div className="px-16 py-4 w-full">
            {' '}
            <table style={{ width: '100%' }}>
              <tr className="w-full bg-gray-100 ">
                <th className="border p-2 w-1/3">Domination</th>
                <th className="border p-2 w-1/3">Pieces</th>
                <th className="border p-2 w-1/3">Peso</th>
              </tr>
              <tr>
                <td className="border p-2  bg-gray-100 text-center font-medium">1000 *</td>
                <td className="border  ">
                  <div className="h-12 px-2 py-1 ">
                    <Form.Item name="piecesOneThousand">
                      <Input
                        size="large"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          console.log('value', value);
                          // setVal((prev) => {
                          //   return { ...prev, piecesOneThousand: value };
                          // });

                          // form.setFieldsValue({ ...value });

                          form.setFieldsValue({
                            piecesOneThousand: value,
                            resultField: { pesoThousand: 1000 * value },
                          });
                          commonCalc();
                          // let thousandVal = 1000 * value;
                          // let fiveHundVal = form.getFieldValue('pesoFiveHundred');
                          // let fiveHundVal = form.getFieldsValue();
                          // console.log('fiveHundVal', fiveHundVal);
                          // pesoTotal
                        }}
                        // value={val?.piecesOneThousand}
                        type={'text'}
                        autocomplete="off"
                        className="text-center"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoThousand']}>
                      <Input
                        className="text-center"
                        placeholder=""
                        size="large"
                        // value={totalPesoThousand()}
                        type={'text'}
                        autocomplete="off"
                        disabled={true}
                        prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">500 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFiveHundred">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFiveHundred: value };
                          // });
                          form.setFieldValue({
                            piecesFiveHundred: value,
                            resultField: { pesoFiveHundred: 500 * value },
                          });
                          commonCalc();
                        }}
                        // value={val?.piecesFiveHundred}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFiveHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFiveHundred()}
                        type={'text'}

                        // prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">200 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwoHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwoHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwoHundred}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">100 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesHundred}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">50 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFifty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFifty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesFifty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFifty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFifty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">20 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwenty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwenty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwenty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwenty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwenty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">10 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTen">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTen: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTen}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTen']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTen()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">5 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFive">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFive: value };
                          // });
                          commonCalc();
                        }}
                        autocomplete="off"
                        // value={val?.piecesFive}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFive']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFive()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">1 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesOne">
                      <Input
                        autocomplete="off"
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesOne: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesOne}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoOne']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoOne()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border p-2 text-center bg-gray-100 font-medium">
                  Total
                </td>{' '}
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="pesoTotal">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalBalance()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
            </table>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default BreakDown;
import { Card, Form, Input } from 'antd';
import React, { useState } from 'react';

const BreakDown = () => {
  const [form] = Form.useForm();

  const cleanInput = (inp) => {
    if (inp) {
      return inp.replace(/(?!-)[^0-9.]/g, '').replace('-', '');
    } else {
      return '';
    }
  };
  const [val, setVal] = useState({
    piecesOneThousand: '',
    piecesFiveHundred: '',
    piecesTwoHundred: '',
    piecesHundred: '',
    piecesFifty: '',
    piecesTwenty: '',
    piecesTen: '',
    piecesFive: '',
    piecesOne: '',
  });

  console.log('val', val);

  const totalPesoThousand = () => {
    const totalPiecesThousand = Number(val?.piecesOneThousand);
    const amountTotalPesoThousand = Number(totalPiecesThousand * 1000);
    if (amountTotalPesoThousand === 0) {
      return '';
    } else return amountTotalPesoThousand;
  };

  const totalPesoFiveHundred = () => {
    const totalPiecesFiveHundred = Number(val?.piecesFiveHundred);
    const amountTotalPesoFiveHundred = Number(totalPiecesFiveHundred * 500);
    if (amountTotalPesoFiveHundred === 0) {
      return '';
    } else return amountTotalPesoFiveHundred;
  };

  const totalPesoTwoHundred = () => {
    const totalPiecesTwoHundred = Number(val?.piecesTwoHundred);
    const amountTotalPesoTwoHundred = Number(totalPiecesTwoHundred * 200);
    if (amountTotalPesoTwoHundred === 0) {
      return '';
    } else return amountTotalPesoTwoHundred;
  };

  const totalPesoHundred = () => {
    const totalPiecesHundred = Number(val?.piecesHundred);
    const amountTotalPesoHundred = Number(totalPiecesHundred * 100);
    if (amountTotalPesoHundred === 0) {
      return '';
    } else return amountTotalPesoHundred;
  };

  const totalPesoFifty = () => {
    const totalPiecesFifty = Number(val?.piecesFifty);
    const amountTotalPesoFifty = Number(totalPiecesFifty * 50);
    if (amountTotalPesoFifty === 0) {
      return '';
    } else return amountTotalPesoFifty;
  };

  const totalPesoTwenty = () => {
    const totalPiecesTwenty = Number(val?.piecesTwenty);
    const amountTotalPesoTwenty = Number(totalPiecesTwenty * 20);
    if (amountTotalPesoTwenty === 0) {
      return '';
    } else return amountTotalPesoTwenty;
  };

  const totalPesoTen = () => {
    const totalPiecesTen = Number(val?.piecesTen);
    const amountTotalPesoTen = Number(totalPiecesTen * 10);
    if (amountTotalPesoTen === 0) {
      return '';
    } else return amountTotalPesoTen;
  };

  const totalPesoFive = () => {
    const totalPiecesFive = Number(val?.piecesFive);
    const amountTotalPesoFive = Number(totalPiecesFive * 5);
    if (amountTotalPesoFive === 0) {
      return '';
    } else return amountTotalPesoFive;
  };

  const totalPesoOne = () => {
    const totalPiecesOne = Number(val?.piecesOne);
    const amountTotalPesoOne = Number(totalPiecesOne * 1);
    if (amountTotalPesoOne === 0) {
      return '';
    } else return amountTotalPesoOne;
  };

  const totalBalance = () => {
    const balTotalPesoThousand = totalPesoThousand();
    const balTotalPesoFiveHundred = totalPesoFiveHundred();
    const balTotalPesoTwoHundred = totalPesoTwoHundred();
    const balTotalPesoHundred = totalPesoHundred();
    const balTotalPesoFifty = totalPesoFifty();
    const balTotalPesoTwenty = totalPesoTwenty();
    const balTotalPesoTen = totalPesoTen();
    const balTotalPesoFive = totalPesoFive();
    const balTotalPesoOne = totalPesoOne();

    const finalBalance = Number(
      Number(balTotalPesoThousand) +
        Number(balTotalPesoFiveHundred) +
        Number(balTotalPesoTwoHundred) +
        Number(balTotalPesoHundred) +
        Number(balTotalPesoFifty) +
        Number(balTotalPesoTwenty) +
        Number(balTotalPesoTen) +
        Number(balTotalPesoFive) +
        Number(balTotalPesoOne),
    );

    if (finalBalance === 0) {
      return '';
    } else return finalBalance;
  };

  const commonCalc = () => {
    let fieldDetails = form.getFieldsValue();
    console.log('fieldDetails', fieldDetails);
    // let newData = Object.keys(fieldDetails?.resultField);
    let newData = Object.values(fieldDetails?.resultField);

    console.log('newData', newData);
  };
  return (
    <div className="bg-white shadow rounded mt-5">
      <Form
        layout="vertical"
        hideRequiredMark
        autoComplete="off"
        colon={false}
        // onFinish={(values) => {}}
        form={form}
      >
        <Card>
          <div style={{ fontSize: '20px', fontWeight: '500' }}>Cash Break Down Details</div>
          <div className="px-16 py-4 w-full">
            {' '}
            <table style={{ width: '100%' }}>
              <tr className="w-full bg-gray-100 ">
                <th className="border p-2 w-1/3">Domination</th>
                <th className="border p-2 w-1/3">Pieces</th>
                <th className="border p-2 w-1/3">Peso</th>
              </tr>
              <tr>
                <td className="border p-2  bg-gray-100 text-center font-medium">1000 *</td>
                <td className="border  ">
                  <div className="h-12 px-2 py-1 ">
                    <Form.Item name="piecesOneThousand">
                      <Input
                        size="large"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          console.log('value', value);
                          // setVal((prev) => {
                          //   return { ...prev, piecesOneThousand: value };
                          // });

                          // form.setFieldsValue({ ...value });

                          form.setFieldsValue({
                            piecesOneThousand: value,
                            resultField: { pesoThousand: 1000 * value },
                          });
                          commonCalc();
                          // let thousandVal = 1000 * value;
                          // let fiveHundVal = form.getFieldValue('pesoFiveHundred');
                          // let fiveHundVal = form.getFieldsValue();
                          // console.log('fiveHundVal', fiveHundVal);
                          // pesoTotal
                        }}
                        // value={val?.piecesOneThousand}
                        type={'text'}
                        autocomplete="off"
                        className="text-center"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoThousand']}>
                      <Input
                        className="text-center"
                        placeholder=""
                        size="large"
                        // value={totalPesoThousand()}
                        type={'text'}
                        autocomplete="off"
                        disabled={true}
                        prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">500 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFiveHundred">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFiveHundred: value };
                          // });
                          form.setFieldValue({
                            piecesFiveHundred: value,
                            resultField: { pesoFiveHundred: 500 * value },
                          });
                          commonCalc();
                        }}
                        // value={val?.piecesFiveHundred}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFiveHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFiveHundred()}
                        type={'text'}

                        // prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">200 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwoHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwoHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwoHundred}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">100 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesHundred}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">50 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFifty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFifty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesFifty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFifty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFifty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">20 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwenty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwenty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwenty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwenty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwenty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">10 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTen">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTen: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTen}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTen']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTen()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">5 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFive">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFive: value };
                          // });
                          commonCalc();
                        }}
                        autocomplete="off"
                        // value={val?.piecesFive}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFive']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFive()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">1 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesOne">
                      <Input
                        autocomplete="off"
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesOne: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesOne}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoOne']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoOne()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border p-2 text-center bg-gray-100 font-medium">
                  Total
                </td>{' '}
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="pesoTotal">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalBalance()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
            </table>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default BreakDown;
import { Card, Form, Input } from 'antd';
import React, { useState } from 'react';

const BreakDown = () => {
  const [form] = Form.useForm();

  const cleanInput = (inp) => {
    if (inp) {
      return inp.replace(/(?!-)[^0-9.]/g, '').replace('-', '');
    } else {
      return '';
    }
  };
  const [val, setVal] = useState({
    piecesOneThousand: '',
    piecesFiveHundred: '',
    piecesTwoHundred: '',
    piecesHundred: '',
    piecesFifty: '',
    piecesTwenty: '',
    piecesTen: '',
    piecesFive: '',
    piecesOne: '',
  });

  console.log('val', val);

  const totalPesoThousand = () => {
    const totalPiecesThousand = Number(val?.piecesOneThousand);
    const amountTotalPesoThousand = Number(totalPiecesThousand * 1000);
    if (amountTotalPesoThousand === 0) {
      return '';
    } else return amountTotalPesoThousand;
  };

  const totalPesoFiveHundred = () => {
    const totalPiecesFiveHundred = Number(val?.piecesFiveHundred);
    const amountTotalPesoFiveHundred = Number(totalPiecesFiveHundred * 500);
    if (amountTotalPesoFiveHundred === 0) {
      return '';
    } else return amountTotalPesoFiveHundred;
  };

  const totalPesoTwoHundred = () => {
    const totalPiecesTwoHundred = Number(val?.piecesTwoHundred);
    const amountTotalPesoTwoHundred = Number(totalPiecesTwoHundred * 200);
    if (amountTotalPesoTwoHundred === 0) {
      return '';
    } else return amountTotalPesoTwoHundred;
  };

  const totalPesoHundred = () => {
    const totalPiecesHundred = Number(val?.piecesHundred);
    const amountTotalPesoHundred = Number(totalPiecesHundred * 100);
    if (amountTotalPesoHundred === 0) {
      return '';
    } else return amountTotalPesoHundred;
  };

  const totalPesoFifty = () => {
    const totalPiecesFifty = Number(val?.piecesFifty);
    const amountTotalPesoFifty = Number(totalPiecesFifty * 50);
    if (amountTotalPesoFifty === 0) {
      return '';
    } else return amountTotalPesoFifty;
  };

  const totalPesoTwenty = () => {
    const totalPiecesTwenty = Number(val?.piecesTwenty);
    const amountTotalPesoTwenty = Number(totalPiecesTwenty * 20);
    if (amountTotalPesoTwenty === 0) {
      return '';
    } else return amountTotalPesoTwenty;
  };

  const totalPesoTen = () => {
    const totalPiecesTen = Number(val?.piecesTen);
    const amountTotalPesoTen = Number(totalPiecesTen * 10);
    if (amountTotalPesoTen === 0) {
      return '';
    } else return amountTotalPesoTen;
  };

  const totalPesoFive = () => {
    const totalPiecesFive = Number(val?.piecesFive);
    const amountTotalPesoFive = Number(totalPiecesFive * 5);
    if (amountTotalPesoFive === 0) {
      return '';
    } else return amountTotalPesoFive;
  };

  const totalPesoOne = () => {
    const totalPiecesOne = Number(val?.piecesOne);
    const amountTotalPesoOne = Number(totalPiecesOne * 1);
    if (amountTotalPesoOne === 0) {
      return '';
    } else return amountTotalPesoOne;
  };

  const totalBalance = () => {
    const balTotalPesoThousand = totalPesoThousand();
    const balTotalPesoFiveHundred = totalPesoFiveHundred();
    const balTotalPesoTwoHundred = totalPesoTwoHundred();
    const balTotalPesoHundred = totalPesoHundred();
    const balTotalPesoFifty = totalPesoFifty();
    const balTotalPesoTwenty = totalPesoTwenty();
    const balTotalPesoTen = totalPesoTen();
    const balTotalPesoFive = totalPesoFive();
    const balTotalPesoOne = totalPesoOne();

    const finalBalance = Number(
      Number(balTotalPesoThousand) +
        Number(balTotalPesoFiveHundred) +
        Number(balTotalPesoTwoHundred) +
        Number(balTotalPesoHundred) +
        Number(balTotalPesoFifty) +
        Number(balTotalPesoTwenty) +
        Number(balTotalPesoTen) +
        Number(balTotalPesoFive) +
        Number(balTotalPesoOne),
    );

    if (finalBalance === 0) {
      return '';
    } else return finalBalance;
  };

  const commonCalc = () => {
    let fieldDetails = form.getFieldsValue();
    console.log('fieldDetails', fieldDetails);
    // let newData = Object.keys(fieldDetails?.resultField);
    let newData = Object.values(fieldDetails?.resultField);

    console.log('newData', newData);
  };
  return (
    <div className="bg-white shadow rounded mt-5">
      <Form
        layout="vertical"
        hideRequiredMark
        autoComplete="off"
        colon={false}
        // onFinish={(values) => {}}
        form={form}
      >
        <Card>
          <div style={{ fontSize: '20px', fontWeight: '500' }}>Cash Break Down Details</div>
          <div className="px-16 py-4 w-full">
            {' '}
            <table style={{ width: '100%' }}>
              <tr className="w-full bg-gray-100 ">
                <th className="border p-2 w-1/3">Domination</th>
                <th className="border p-2 w-1/3">Pieces</th>
                <th className="border p-2 w-1/3">Peso</th>
              </tr>
              <tr>
                <td className="border p-2  bg-gray-100 text-center font-medium">1000 *</td>
                <td className="border  ">
                  <div className="h-12 px-2 py-1 ">
                    <Form.Item name="piecesOneThousand">
                      <Input
                        size="large"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          console.log('value', value);
                          // setVal((prev) => {
                          //   return { ...prev, piecesOneThousand: value };
                          // });

                          // form.setFieldsValue({ ...value });

                          form.setFieldsValue({
                            piecesOneThousand: value,
                            resultField: { pesoThousand: 1000 * value },
                          });
                          commonCalc();
                          // let thousandVal = 1000 * value;
                          // let fiveHundVal = form.getFieldValue('pesoFiveHundred');
                          // let fiveHundVal = form.getFieldsValue();
                          // console.log('fiveHundVal', fiveHundVal);
                          // pesoTotal
                        }}
                        // value={val?.piecesOneThousand}
                        type={'text'}
                        autocomplete="off"
                        className="text-center"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoThousand']}>
                      <Input
                        className="text-center"
                        placeholder=""
                        size="large"
                        // value={totalPesoThousand()}
                        type={'text'}
                        autocomplete="off"
                        disabled={true}
                        prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">500 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFiveHundred">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFiveHundred: value };
                          // });
                          form.setFieldValue({
                            piecesFiveHundred: value,
                            resultField: { pesoFiveHundred: 500 * value },
                          });
                          commonCalc();
                        }}
                        // value={val?.piecesFiveHundred}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFiveHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFiveHundred()}
                        type={'text'}

                        // prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">200 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwoHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwoHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwoHundred}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">100 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesHundred}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">50 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFifty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFifty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesFifty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFifty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFifty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">20 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwenty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwenty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwenty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwenty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwenty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">10 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTen">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTen: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTen}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTen']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTen()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">5 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFive">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFive: value };
                          // });
                          commonCalc();
                        }}
                        autocomplete="off"
                        // value={val?.piecesFive}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFive']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFive()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">1 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesOne">
                      <Input
                        autocomplete="off"
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesOne: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesOne}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoOne']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoOne()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border p-2 text-center bg-gray-100 font-medium">
                  Total
                </td>{' '}
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="pesoTotal">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalBalance()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
            </table>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default BreakDown;
import { Card, Form, Input } from 'antd';
import React, { useState } from 'react';

const BreakDown = () => {
  const [form] = Form.useForm();

  const cleanInput = (inp) => {
    if (inp) {
      return inp.replace(/(?!-)[^0-9.]/g, '').replace('-', '');
    } else {
      return '';
    }
  };
  const [val, setVal] = useState({
    piecesOneThousand: '',
    piecesFiveHundred: '',
    piecesTwoHundred: '',
    piecesHundred: '',
    piecesFifty: '',
    piecesTwenty: '',
    piecesTen: '',
    piecesFive: '',
    piecesOne: '',
  });

  console.log('val', val);

  const totalPesoThousand = () => {
    const totalPiecesThousand = Number(val?.piecesOneThousand);
    const amountTotalPesoThousand = Number(totalPiecesThousand * 1000);
    if (amountTotalPesoThousand === 0) {
      return '';
    } else return amountTotalPesoThousand;
  };

  const totalPesoFiveHundred = () => {
    const totalPiecesFiveHundred = Number(val?.piecesFiveHundred);
    const amountTotalPesoFiveHundred = Number(totalPiecesFiveHundred * 500);
    if (amountTotalPesoFiveHundred === 0) {
      return '';
    } else return amountTotalPesoFiveHundred;
  };

  const totalPesoTwoHundred = () => {
    const totalPiecesTwoHundred = Number(val?.piecesTwoHundred);
    const amountTotalPesoTwoHundred = Number(totalPiecesTwoHundred * 200);
    if (amountTotalPesoTwoHundred === 0) {
      return '';
    } else return amountTotalPesoTwoHundred;
  };

  const totalPesoHundred = () => {
    const totalPiecesHundred = Number(val?.piecesHundred);
    const amountTotalPesoHundred = Number(totalPiecesHundred * 100);
    if (amountTotalPesoHundred === 0) {
      return '';
    } else return amountTotalPesoHundred;
  };

  const totalPesoFifty = () => {
    const totalPiecesFifty = Number(val?.piecesFifty);
    const amountTotalPesoFifty = Number(totalPiecesFifty * 50);
    if (amountTotalPesoFifty === 0) {
      return '';
    } else return amountTotalPesoFifty;
  };

  const totalPesoTwenty = () => {
    const totalPiecesTwenty = Number(val?.piecesTwenty);
    const amountTotalPesoTwenty = Number(totalPiecesTwenty * 20);
    if (amountTotalPesoTwenty === 0) {
      return '';
    } else return amountTotalPesoTwenty;
  };

  const totalPesoTen = () => {
    const totalPiecesTen = Number(val?.piecesTen);
    const amountTotalPesoTen = Number(totalPiecesTen * 10);
    if (amountTotalPesoTen === 0) {
      return '';
    } else return amountTotalPesoTen;
  };

  const totalPesoFive = () => {
    const totalPiecesFive = Number(val?.piecesFive);
    const amountTotalPesoFive = Number(totalPiecesFive * 5);
    if (amountTotalPesoFive === 0) {
      return '';
    } else return amountTotalPesoFive;
  };

  const totalPesoOne = () => {
    const totalPiecesOne = Number(val?.piecesOne);
    const amountTotalPesoOne = Number(totalPiecesOne * 1);
    if (amountTotalPesoOne === 0) {
      return '';
    } else return amountTotalPesoOne;
  };

  const totalBalance = () => {
    const balTotalPesoThousand = totalPesoThousand();
    const balTotalPesoFiveHundred = totalPesoFiveHundred();
    const balTotalPesoTwoHundred = totalPesoTwoHundred();
    const balTotalPesoHundred = totalPesoHundred();
    const balTotalPesoFifty = totalPesoFifty();
    const balTotalPesoTwenty = totalPesoTwenty();
    const balTotalPesoTen = totalPesoTen();
    const balTotalPesoFive = totalPesoFive();
    const balTotalPesoOne = totalPesoOne();

    const finalBalance = Number(
      Number(balTotalPesoThousand) +
        Number(balTotalPesoFiveHundred) +
        Number(balTotalPesoTwoHundred) +
        Number(balTotalPesoHundred) +
        Number(balTotalPesoFifty) +
        Number(balTotalPesoTwenty) +
        Number(balTotalPesoTen) +
        Number(balTotalPesoFive) +
        Number(balTotalPesoOne),
    );

    if (finalBalance === 0) {
      return '';
    } else return finalBalance;
  };

  const commonCalc = () => {
    let fieldDetails = form.getFieldsValue();
    console.log('fieldDetails', fieldDetails);
    // let newData = Object.keys(fieldDetails?.resultField);
    let newData = Object.values(fieldDetails?.resultField);

    console.log('newData', newData);
  };
  return (
    <div className="bg-white shadow rounded mt-5">
      <Form
        layout="vertical"
        hideRequiredMark
        autoComplete="off"
        colon={false}
        // onFinish={(values) => {}}
        form={form}
      >
        <Card>
          <div style={{ fontSize: '20px', fontWeight: '500' }}>Cash Break Down Details</div>
          <div className="px-16 py-4 w-full">
            {' '}
            <table style={{ width: '100%' }}>
              <tr className="w-full bg-gray-100 ">
                <th className="border p-2 w-1/3">Domination</th>
                <th className="border p-2 w-1/3">Pieces</th>
                <th className="border p-2 w-1/3">Peso</th>
              </tr>
              <tr>
                <td className="border p-2  bg-gray-100 text-center font-medium">1000 *</td>
                <td className="border  ">
                  <div className="h-12 px-2 py-1 ">
                    <Form.Item name="piecesOneThousand">
                      <Input
                        size="large"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          console.log('value', value);
                          // setVal((prev) => {
                          //   return { ...prev, piecesOneThousand: value };
                          // });

                          // form.setFieldsValue({ ...value });

                          form.setFieldsValue({
                            piecesOneThousand: value,
                            resultField: { pesoThousand: 1000 * value },
                          });
                          commonCalc();
                          // let thousandVal = 1000 * value;
                          // let fiveHundVal = form.getFieldValue('pesoFiveHundred');
                          // let fiveHundVal = form.getFieldsValue();
                          // console.log('fiveHundVal', fiveHundVal);
                          // pesoTotal
                        }}
                        // value={val?.piecesOneThousand}
                        type={'text'}
                        autocomplete="off"
                        className="text-center"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoThousand']}>
                      <Input
                        className="text-center"
                        placeholder=""
                        size="large"
                        // value={totalPesoThousand()}
                        type={'text'}
                        autocomplete="off"
                        disabled={true}
                        prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">500 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFiveHundred">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFiveHundred: value };
                          // });
                          form.setFieldValue({
                            piecesFiveHundred: value,
                            resultField: { pesoFiveHundred: 500 * value },
                          });
                          commonCalc();
                        }}
                        // value={val?.piecesFiveHundred}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFiveHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFiveHundred()}
                        type={'text'}

                        // prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">200 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwoHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwoHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwoHundred}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">100 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesHundred}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">50 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFifty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFifty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesFifty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFifty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFifty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">20 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwenty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwenty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwenty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwenty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwenty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">10 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTen">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTen: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTen}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTen']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTen()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">5 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFive">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFive: value };
                          // });
                          commonCalc();
                        }}
                        autocomplete="off"
                        // value={val?.piecesFive}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFive']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFive()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">1 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesOne">
                      <Input
                        autocomplete="off"
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesOne: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesOne}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoOne']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoOne()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border p-2 text-center bg-gray-100 font-medium">
                  Total
                </td>{' '}
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="pesoTotal">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalBalance()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
            </table>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default BreakDown;
import { Card, Form, Input } from 'antd';
import React, { useState } from 'react';

const BreakDown = () => {
  const [form] = Form.useForm();

  const cleanInput = (inp) => {
    if (inp) {
      return inp.replace(/(?!-)[^0-9.]/g, '').replace('-', '');
    } else {
      return '';
    }
  };
  const [val, setVal] = useState({
    piecesOneThousand: '',
    piecesFiveHundred: '',
    piecesTwoHundred: '',
    piecesHundred: '',
    piecesFifty: '',
    piecesTwenty: '',
    piecesTen: '',
    piecesFive: '',
    piecesOne: '',
  });

  console.log('val', val);

  const totalPesoThousand = () => {
    const totalPiecesThousand = Number(val?.piecesOneThousand);
    const amountTotalPesoThousand = Number(totalPiecesThousand * 1000);
    if (amountTotalPesoThousand === 0) {
      return '';
    } else return amountTotalPesoThousand;
  };

  const totalPesoFiveHundred = () => {
    const totalPiecesFiveHundred = Number(val?.piecesFiveHundred);
    const amountTotalPesoFiveHundred = Number(totalPiecesFiveHundred * 500);
    if (amountTotalPesoFiveHundred === 0) {
      return '';
    } else return amountTotalPesoFiveHundred;
  };

  const totalPesoTwoHundred = () => {
    const totalPiecesTwoHundred = Number(val?.piecesTwoHundred);
    const amountTotalPesoTwoHundred = Number(totalPiecesTwoHundred * 200);
    if (amountTotalPesoTwoHundred === 0) {
      return '';
    } else return amountTotalPesoTwoHundred;
  };

  const totalPesoHundred = () => {
    const totalPiecesHundred = Number(val?.piecesHundred);
    const amountTotalPesoHundred = Number(totalPiecesHundred * 100);
    if (amountTotalPesoHundred === 0) {
      return '';
    } else return amountTotalPesoHundred;
  };

  const totalPesoFifty = () => {
    const totalPiecesFifty = Number(val?.piecesFifty);
    const amountTotalPesoFifty = Number(totalPiecesFifty * 50);
    if (amountTotalPesoFifty === 0) {
      return '';
    } else return amountTotalPesoFifty;
  };

  const totalPesoTwenty = () => {
    const totalPiecesTwenty = Number(val?.piecesTwenty);
    const amountTotalPesoTwenty = Number(totalPiecesTwenty * 20);
    if (amountTotalPesoTwenty === 0) {
      return '';
    } else return amountTotalPesoTwenty;
  };

  const totalPesoTen = () => {
    const totalPiecesTen = Number(val?.piecesTen);
    const amountTotalPesoTen = Number(totalPiecesTen * 10);
    if (amountTotalPesoTen === 0) {
      return '';
    } else return amountTotalPesoTen;
  };

  const totalPesoFive = () => {
    const totalPiecesFive = Number(val?.piecesFive);
    const amountTotalPesoFive = Number(totalPiecesFive * 5);
    if (amountTotalPesoFive === 0) {
      return '';
    } else return amountTotalPesoFive;
  };

  const totalPesoOne = () => {
    const totalPiecesOne = Number(val?.piecesOne);
    const amountTotalPesoOne = Number(totalPiecesOne * 1);
    if (amountTotalPesoOne === 0) {
      return '';
    } else return amountTotalPesoOne;
  };

  const totalBalance = () => {
    const balTotalPesoThousand = totalPesoThousand();
    const balTotalPesoFiveHundred = totalPesoFiveHundred();
    const balTotalPesoTwoHundred = totalPesoTwoHundred();
    const balTotalPesoHundred = totalPesoHundred();
    const balTotalPesoFifty = totalPesoFifty();
    const balTotalPesoTwenty = totalPesoTwenty();
    const balTotalPesoTen = totalPesoTen();
    const balTotalPesoFive = totalPesoFive();
    const balTotalPesoOne = totalPesoOne();

    const finalBalance = Number(
      Number(balTotalPesoThousand) +
        Number(balTotalPesoFiveHundred) +
        Number(balTotalPesoTwoHundred) +
        Number(balTotalPesoHundred) +
        Number(balTotalPesoFifty) +
        Number(balTotalPesoTwenty) +
        Number(balTotalPesoTen) +
        Number(balTotalPesoFive) +
        Number(balTotalPesoOne),
    );

    if (finalBalance === 0) {
      return '';
    } else return finalBalance;
  };

  const commonCalc = () => {
    let fieldDetails = form.getFieldsValue();
    console.log('fieldDetails', fieldDetails);
    // let newData = Object.keys(fieldDetails?.resultField);
    let newData = Object.values(fieldDetails?.resultField);

    console.log('newData', newData);
  };
  return (
    <div className="bg-white shadow rounded mt-5">
      <Form
        layout="vertical"
        hideRequiredMark
        autoComplete="off"
        colon={false}
        // onFinish={(values) => {}}
        form={form}
      >
        <Card>
          <div style={{ fontSize: '20px', fontWeight: '500' }}>Cash Break Down Details</div>
          <div className="px-16 py-4 w-full">
            {' '}
            <table style={{ width: '100%' }}>
              <tr className="w-full bg-gray-100 ">
                <th className="border p-2 w-1/3">Domination</th>
                <th className="border p-2 w-1/3">Pieces</th>
                <th className="border p-2 w-1/3">Peso</th>
              </tr>
              <tr>
                <td className="border p-2  bg-gray-100 text-center font-medium">1000 *</td>
                <td className="border  ">
                  <div className="h-12 px-2 py-1 ">
                    <Form.Item name="piecesOneThousand">
                      <Input
                        size="large"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          console.log('value', value);
                          // setVal((prev) => {
                          //   return { ...prev, piecesOneThousand: value };
                          // });

                          // form.setFieldsValue({ ...value });

                          form.setFieldsValue({
                            piecesOneThousand: value,
                            resultField: { pesoThousand: 1000 * value },
                          });
                          commonCalc();
                          // let thousandVal = 1000 * value;
                          // let fiveHundVal = form.getFieldValue('pesoFiveHundred');
                          // let fiveHundVal = form.getFieldsValue();
                          // console.log('fiveHundVal', fiveHundVal);
                          // pesoTotal
                        }}
                        // value={val?.piecesOneThousand}
                        type={'text'}
                        autocomplete="off"
                        className="text-center"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoThousand']}>
                      <Input
                        className="text-center"
                        placeholder=""
                        size="large"
                        // value={totalPesoThousand()}
                        type={'text'}
                        autocomplete="off"
                        disabled={true}
                        prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">500 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFiveHundred">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFiveHundred: value };
                          // });
                          form.setFieldValue({
                            piecesFiveHundred: value,
                            resultField: { pesoFiveHundred: 500 * value },
                          });
                          commonCalc();
                        }}
                        // value={val?.piecesFiveHundred}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFiveHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFiveHundred()}
                        type={'text'}

                        // prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">200 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwoHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwoHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwoHundred}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">100 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesHundred}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">50 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFifty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFifty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesFifty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFifty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFifty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">20 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwenty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwenty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwenty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwenty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwenty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">10 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTen">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTen: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTen}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTen']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTen()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">5 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFive">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFive: value };
                          // });
                          commonCalc();
                        }}
                        autocomplete="off"
                        // value={val?.piecesFive}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFive']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFive()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">1 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesOne">
                      <Input
                        autocomplete="off"
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesOne: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesOne}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoOne']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoOne()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border p-2 text-center bg-gray-100 font-medium">
                  Total
                </td>{' '}
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="pesoTotal">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalBalance()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
            </table>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default BreakDown;
import { Card, Form, Input } from 'antd';
import React, { useState } from 'react';

const BreakDown = () => {
  const [form] = Form.useForm();

  const cleanInput = (inp) => {
    if (inp) {
      return inp.replace(/(?!-)[^0-9.]/g, '').replace('-', '');
    } else {
      return '';
    }
  };
  const [val, setVal] = useState({
    piecesOneThousand: '',
    piecesFiveHundred: '',
    piecesTwoHundred: '',
    piecesHundred: '',
    piecesFifty: '',
    piecesTwenty: '',
    piecesTen: '',
    piecesFive: '',
    piecesOne: '',
  });

  console.log('val', val);

  const totalPesoThousand = () => {
    const totalPiecesThousand = Number(val?.piecesOneThousand);
    const amountTotalPesoThousand = Number(totalPiecesThousand * 1000);
    if (amountTotalPesoThousand === 0) {
      return '';
    } else return amountTotalPesoThousand;
  };

  const totalPesoFiveHundred = () => {
    const totalPiecesFiveHundred = Number(val?.piecesFiveHundred);
    const amountTotalPesoFiveHundred = Number(totalPiecesFiveHundred * 500);
    if (amountTotalPesoFiveHundred === 0) {
      return '';
    } else return amountTotalPesoFiveHundred;
  };

  const totalPesoTwoHundred = () => {
    const totalPiecesTwoHundred = Number(val?.piecesTwoHundred);
    const amountTotalPesoTwoHundred = Number(totalPiecesTwoHundred * 200);
    if (amountTotalPesoTwoHundred === 0) {
      return '';
    } else return amountTotalPesoTwoHundred;
  };

  const totalPesoHundred = () => {
    const totalPiecesHundred = Number(val?.piecesHundred);
    const amountTotalPesoHundred = Number(totalPiecesHundred * 100);
    if (amountTotalPesoHundred === 0) {
      return '';
    } else return amountTotalPesoHundred;
  };

  const totalPesoFifty = () => {
    const totalPiecesFifty = Number(val?.piecesFifty);
    const amountTotalPesoFifty = Number(totalPiecesFifty * 50);
    if (amountTotalPesoFifty === 0) {
      return '';
    } else return amountTotalPesoFifty;
  };

  const totalPesoTwenty = () => {
    const totalPiecesTwenty = Number(val?.piecesTwenty);
    const amountTotalPesoTwenty = Number(totalPiecesTwenty * 20);
    if (amountTotalPesoTwenty === 0) {
      return '';
    } else return amountTotalPesoTwenty;
  };

  const totalPesoTen = () => {
    const totalPiecesTen = Number(val?.piecesTen);
    const amountTotalPesoTen = Number(totalPiecesTen * 10);
    if (amountTotalPesoTen === 0) {
      return '';
    } else return amountTotalPesoTen;
  };

  const totalPesoFive = () => {
    const totalPiecesFive = Number(val?.piecesFive);
    const amountTotalPesoFive = Number(totalPiecesFive * 5);
    if (amountTotalPesoFive === 0) {
      return '';
    } else return amountTotalPesoFive;
  };

  const totalPesoOne = () => {
    const totalPiecesOne = Number(val?.piecesOne);
    const amountTotalPesoOne = Number(totalPiecesOne * 1);
    if (amountTotalPesoOne === 0) {
      return '';
    } else return amountTotalPesoOne;
  };

  const totalBalance = () => {
    const balTotalPesoThousand = totalPesoThousand();
    const balTotalPesoFiveHundred = totalPesoFiveHundred();
    const balTotalPesoTwoHundred = totalPesoTwoHundred();
    const balTotalPesoHundred = totalPesoHundred();
    const balTotalPesoFifty = totalPesoFifty();
    const balTotalPesoTwenty = totalPesoTwenty();
    const balTotalPesoTen = totalPesoTen();
    const balTotalPesoFive = totalPesoFive();
    const balTotalPesoOne = totalPesoOne();

    const finalBalance = Number(
      Number(balTotalPesoThousand) +
        Number(balTotalPesoFiveHundred) +
        Number(balTotalPesoTwoHundred) +
        Number(balTotalPesoHundred) +
        Number(balTotalPesoFifty) +
        Number(balTotalPesoTwenty) +
        Number(balTotalPesoTen) +
        Number(balTotalPesoFive) +
        Number(balTotalPesoOne),
    );

    if (finalBalance === 0) {
      return '';
    } else return finalBalance;
  };

  const commonCalc = () => {
    let fieldDetails = form.getFieldsValue();
    console.log('fieldDetails', fieldDetails);
    // let newData = Object.keys(fieldDetails?.resultField);
    let newData = Object.values(fieldDetails?.resultField);

    console.log('newData', newData);
  };
  return (
    <div className="bg-white shadow rounded mt-5">
      <Form
        layout="vertical"
        hideRequiredMark
        autoComplete="off"
        colon={false}
        // onFinish={(values) => {}}
        form={form}
      >
        <Card>
          <div style={{ fontSize: '20px', fontWeight: '500' }}>Cash Break Down Details</div>
          <div className="px-16 py-4 w-full">
            {' '}
            <table style={{ width: '100%' }}>
              <tr className="w-full bg-gray-100 ">
                <th className="border p-2 w-1/3">Domination</th>
                <th className="border p-2 w-1/3">Pieces</th>
                <th className="border p-2 w-1/3">Peso</th>
              </tr>
              <tr>
                <td className="border p-2  bg-gray-100 text-center font-medium">1000 *</td>
                <td className="border  ">
                  <div className="h-12 px-2 py-1 ">
                    <Form.Item name="piecesOneThousand">
                      <Input
                        size="large"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          console.log('value', value);
                          // setVal((prev) => {
                          //   return { ...prev, piecesOneThousand: value };
                          // });

                          // form.setFieldsValue({ ...value });

                          form.setFieldsValue({
                            piecesOneThousand: value,
                            resultField: { pesoThousand: 1000 * value },
                          });
                          commonCalc();
                          // let thousandVal = 1000 * value;
                          // let fiveHundVal = form.getFieldValue('pesoFiveHundred');
                          // let fiveHundVal = form.getFieldsValue();
                          // console.log('fiveHundVal', fiveHundVal);
                          // pesoTotal
                        }}
                        // value={val?.piecesOneThousand}
                        type={'text'}
                        autocomplete="off"
                        className="text-center"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoThousand']}>
                      <Input
                        className="text-center"
                        placeholder=""
                        size="large"
                        // value={totalPesoThousand()}
                        type={'text'}
                        autocomplete="off"
                        disabled={true}
                        prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">500 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFiveHundred">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFiveHundred: value };
                          // });
                          form.setFieldValue({
                            piecesFiveHundred: value,
                            resultField: { pesoFiveHundred: 500 * value },
                          });
                          commonCalc();
                        }}
                        // value={val?.piecesFiveHundred}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFiveHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFiveHundred()}
                        type={'text'}

                        // prefix={'₱'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">200 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwoHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwoHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwoHundred}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">100 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesHundred">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesHundred: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesHundred}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoHundred']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoHundred()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">50 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFifty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFifty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesFifty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFifty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFifty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">20 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTwenty">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTwenty: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTwenty}
                        type={'text'}
                        autocomplete="off"
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTwenty']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTwenty()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">10 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesTen">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesTen: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesTen}
                        autocomplete="off"
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoTen']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoTen()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">5 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesFive">
                      <Input
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesFive: value };
                          // });
                          commonCalc();
                        }}
                        autocomplete="off"
                        // value={val?.piecesFive}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoFive']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoFive()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>{' '}
              <tr>
                <td className="border p-2 text-center bg-gray-100 font-medium">1 *</td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="piecesOne">
                      <Input
                        autocomplete="off"
                        size="large"
                        className="text-center"
                        onChange={(e) => {
                          const value = cleanInput(e.target.value.toString());
                          // setVal((prev) => {
                          //   return { ...prev, piecesOne: value };
                          // });
                          commonCalc();
                        }}
                        // value={val?.piecesOne}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name={['resultField', 'pesoOne']}>
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalPesoOne()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border p-2 text-center bg-gray-100 font-medium">
                  Total
                </td>{' '}
                <td className="border">
                  {' '}
                  <div className="h-12 px-2 py-1">
                    <Form.Item name="pesoTotal">
                      <Input
                        size="large"
                        autocomplete="off"
                        className="text-center"
                        // value={totalBalance()}
                        type={'text'}
                      />
                    </Form.Item>
                  </div>{' '}
                </td>
              </tr>
            </table>
          </div>
        </Card>
      </Form>
    </div>
  );
};

export default BreakDown;
                  
//                   className="border p-2 text-center bg-gray-100 font-medium"
//                 >
//                   Total
//                 </td>{" "}
//                 <td className="border">
//                   {" "}
//                   <div className="h-12 px-2 py-1">
//                     <Form.Item name="pesoTotal">
//                       <Input
//                         size="large"
//                         autocomplete="off"
//                         className="text-center"
//                         // value={totalBalance()}
//                         type={"text"}
//                       />
//                     </Form.Item>
//                   </div>{" "}
//                 </td>
//               </tr>
//             </table>
//           </div>
//         </Card>
//       </Form>
//     </div>
//   );
// };

// export default BreakDown;
