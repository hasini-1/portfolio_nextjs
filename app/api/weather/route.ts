import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const latitude = searchParams.get("latitude");
    const longitude = searchParams.get("longitude");

    if (!latitude || !longitude) {
      return NextResponse.json(
        {
          error: "Latitude and longitude are required.",
        },
        { status: 400 }
      );
    }

    const weatherUrl = new URL(
      "https://api.open-meteo.com/v1/forecast"
    );

    weatherUrl.searchParams.set("latitude", latitude);
    weatherUrl.searchParams.set("longitude", longitude);

    weatherUrl.searchParams.set(
      "current",
      "temperature_2m,weather_code,is_day,precipitation,cloud_cover"
    );

    weatherUrl.searchParams.set("timezone", "auto");

    const response = await fetch(weatherUrl.toString(), {
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Open-Meteo request failed.",
          details: data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Weather API Error:", error);

    return NextResponse.json(
      {
        error: "Unable to fetch weather data.",
      },
      { status: 500 }
    );
  }
}