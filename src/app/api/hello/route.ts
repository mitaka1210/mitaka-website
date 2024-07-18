import {NextResponse} from "next/server";

type ResponseData = {
  message: string
}

export async function GET() {

  console.log("Location API was HIT !");

  // let location = await getUserLocation()
  // console.log(location);

  // UN COMMENT THE ABOVE TO SEE THE ERROR

  return NextResponse.json({data: "Location API says Hello !!"});
}
