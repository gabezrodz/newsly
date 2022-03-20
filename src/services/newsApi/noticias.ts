import { newsApi } from "./config";

export const getTopHeadLines = async () => {
  try {
    const response = await newsApi.get("/top-headlines?country=br");

    return response.data;
  } catch (error) {
    return {
      message: "Erro ao tentar consumir api, erro: " + error,
    };
  }
};

export const getTopHeadLinesTech = async () => {
  try {
    const response = await newsApi.get(
      "/top-headlines?category=technology&country=br"
    );

    return response.data;
  } catch (error) {
    return {
      message: "Erro ao tentar consumir api, erro: " + error,
    };
  }
};

export const getTopHeadLinesHealth = async () => {
  try {
    const response = await newsApi.get(
      "/top-headlines?category=health&country=br"
    );

    return response.data;
  } catch (error) {
    return {
      message: "Erro ao tentar consumir api, erro: " + error,
    };
  }
};


export const getTopHeadLinesSports = async () => {
  try {
    const response = await newsApi.get(
      "/top-headlines?category=sports&country=br"
    );

    return response.data;
  } catch (error) {
    return {
      message: "Erro ao tentar consumir api, erro: " + error,
    };
  }
};

export const getTopHeadLinesBusiness = async () => {
  try {
    const response = await newsApi.get(
      "/top-headlines?category=business&country=br"
    );

    return response.data;
  } catch (error) {
    return {
      message: "Erro ao tentar consumir api, erro: " + error,
    };
  }
};