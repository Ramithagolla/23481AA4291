import dotenv from "dotenv";

dotenv.config();
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzQ4MWE0MjkxQGdlY2d1ZGxhdmFsbGVydW1pYy5pbiIsImV4cCI6MTc3ODMwODY2MywiaWF0IjoxNzc4MzA3NzYzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYTc3MDc4NDMtZGYxZi00YmNiLThjZWUtMzkwY2RhMWI3ZDRhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmFtaXRoYSIsInN1YiI6IjExOTg1MWE4LTQyM2YtNDJkMS05NGQ1LTZlM2MzY2NmYmFjYyJ9LCJlbWFpbCI6IjIzNDgxYTQyOTFAZ2VjZ3VkbGF2YWxsZXJ1bWljLmluIiwibmFtZSI6InJhbWl0aGEiLCJyb2xsTm8iOiIyM2E5MWE0MjkxIiwiYWNjZXNzQ29kZSI6ImVKZEN1QyIsImNsaWVudElEIjoiMTE5ODUxYTgtNDIzZi00MmQxLTk0ZDUtNmUzYzNjY2ZiYWNjIiwiY2xpZW50U2VjcmV0IjoiS3JhSE5zRFBtdmVTdmpDQiJ9.MKQMqBYQBKyAhLF5NStkVUyIXY-CRK3X_2TLHB7ao7Q";
export async function Log(
  stack: string,
  level: string,
  pkg: string,
  message: string
) {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          stack,
          level,
          package: pkg,
          message,
        }),
      }
    );

    const data = await response.json();

    console.log("Log Created:", data);
  } catch (error) {
    console.error("Logging failed:", error);
  }
}