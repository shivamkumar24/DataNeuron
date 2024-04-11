import axios from "axios";

export const BASE_URL = "https://dataneuronbackend-edbc.onrender.com/";

export const getData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/task`);
    const data = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error getting count:", error);
  }
};

export const addData = async (data) => {
  console.log("check", data);
  try {
    await fetch(`${BASE_URL}/task/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error adding data:", error);
  }
};

export const updateData = async ({ id, payload }) => {
  try {
    const response = await axios.patch(`${BASE_URL}/task/update/${id}`, {
      title: payload,
    });

    console.log("Update successful", response.data.message);
    return response.data.message;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const getCount = async () => {
  try {
    const response = await fetch(`${BASE_URL}/task/getCount`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting count:", error);
  }
};
