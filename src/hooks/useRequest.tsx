import { request } from "http";
import React from "react"
import { useState } from "react";
import { json } from "stream/consumers";


export interface dataType{
  _created: number,
  _data_type: string,
  _is_deleted: boolean,
  _modified: number
  _self_link: string,
  _user: string,
  _uuid: string,
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: string [] ,
  price: number,
  rating: number,
stock: number,
  thumbnail: string,
  title: string
}

export interface responseType {
  cursor: string,
  items: dataType[],
  next_page: string,
}

export type UseRequestResult  =
  | { sendRequest: (body?: any[]) => Promise<any>; fetchLoading: boolean; error: boolean, response: responseType | null | dataType }
  | { sendRequest: (body?: any[]) => Promise<any>; fetchLoading: boolean; error: boolean, response: responseType | null | dataType};

export const useRequest = (url: string, method: string): UseRequestResult => {
  const [response, setResponse] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [requestLoading, setRequestLoading] = useState(false);
  const [error, setError] = useState(false);
  const API_KEY = 'tkhyLoZW3FeAwnacIx7zbmTlvnPeg2vOarQ32hl0CLECnAYdUA';
  const sendRequest = async (body?: any[] | {}) => {
    
    if(method === 'GET') {
      setFetchLoading(true)
      fetch(url,{
        method: method,
        headers: {
          'Content-Type': 'application.json',
          Authorization: `Bearer ${API_KEY}`
        },
      }).then(res =>
       { if(!res.ok)
        {throw new Error('failed to get response')}
       return res.json()})
      .then((res) => setResponse(res))
      .catch(error => setError(error))
      .finally(() => setFetchLoading(false))
    }
    if(method !== 'GET') {
      setRequestLoading(true)
     
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application.json',
          Authorization: `Bearer ${API_KEY}`
        },
       body: !!body ? JSON.stringify(body) : undefined
      })
      .then(res =>
        { if(!res.ok)
         {throw new Error('failed to request ')}
        return res.json()})
       .then((res) => setResponse(res))
       .catch(error => setError(error))
       .finally(() => setFetchLoading(false))  
    }
    }
 return {sendRequest, fetchLoading, error, response}
}

