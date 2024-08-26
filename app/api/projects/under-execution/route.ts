import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));

  const paginatedData: { [key: string]: { [key: number]: Object[] } } = {
    ar: {
      1: [
        {
          id: uuidv4(),
          name: "تطوير المتنزة الوطني السابع والثامن (المجموعة الثانية - المرحلة الثانية)",
          status: "late",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "إنشاء المتنزة السادس (السبخة) (المجموعة الأولى - المرحلة الثانية)",
          status: "onSchedule",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "ترميم وتأهيل متنزة الإحساء الوطني بمحافظة الإحساء بمنطقة الشرقية",
          status: "late",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "مشروع تشجير منتزه الاني البري بوادي حلي بمحافظة القنفذة المرحلة الاولى",
          status: "onSchedule",
          percentage: 61.72,
        },
        {
          id: uuidv4(),
          name: "تصميم منتزة الوطني التاسع والعاشر (المجموعة الثانية - المرحلة الثانية)",
          status: "stumbling",
          percentage: 20.0,
        },
        {
          id: uuidv4(),
          name: "تطوير المتنزة التاسع والعاشر (المجموعة الثانية - المرحلة الثانية)",
          status: "early",
          percentage: 5.0,
        },
      ],
      2: [
        {
          id: uuidv4(),
          name: "تطوير المتنزة الوطني السابع والثامن (المجموعة الثانية - المرحلة الثانية)",
          status: "late",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "إنشاء المتنزة السادس (السبخة) (المجموعة الأولى - المرحلة الثانية)",
          status: "onSchedule",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "ترميم وتأهيل متنزة الإحساء الوطني بمحافظة الإحساء بمنطقة الشرقية",
          status: "late",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "مشروع تشجير منتزه الاني البري بوادي حلي بمحافظة القنفذة المرحلة الاولى",
          status: "onSchedule",
          percentage: 61.72,
        },
        {
          id: uuidv4(),
          name: "تصميم منتزة الوطني التاسع والعاشر (المجموعة الثانية - المرحلة الثانية)",
          status: "stumbling",
          percentage: 20.0,
        },
        {
          id: uuidv4(),
          name: "تطوير المتنزة التاسع والعاشر (المجموعة الثانية - المرحلة الثانية)",
          status: "early",
          percentage: 5.0,
        },
      ],
    },
    en: {
      1: [
        {
          id: uuidv4(),
          name: "Development of the Seventh and Eighth National Park (Group Two - Phase Two)",
          status: "late",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "Establishment of the Sixth Park (Al-Sabkha) (Group One - Phase Two)",
          status: "onSchedule",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "Restoration and Rehabilitation of Al-Ahsa National Park in Al-Ahsa Governorate, Eastern Region",
          status: "late",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "Project for Afforestation of Al-Ani Wild Park in Wadi Hali, Al-Qunfudhah Governorate - Phase One",
          status: "onSchedule",
          percentage: 61.72,
        },
        {
          id: uuidv4(),
          name: "Design of the Ninth and Tenth National Park (Group Two - Phase Two)",
          status: "stumbling",
          percentage: 20.0,
        },
        {
          id: uuidv4(),
          name: "Development of the Ninth and Tenth National Park (Group Two - Phase Two)",
          status: "early",
          percentage: 5.0,
        },
      ],
      2: [
        {
          id: uuidv4(),
          name: "Development of the Seventh and Eighth National Park (Group Two - Phase Two)",
          status: "late",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "Establishment of the Sixth Park (Al-Sabkha) (Group One - Phase Two)",
          status: "onSchedule",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "Restoration and Rehabilitation of Al-Ahsa National Park in Al-Ahsa Governorate, Eastern Region",
          status: "late",
          percentage: 0.0,
        },
        {
          id: uuidv4(),
          name: "Project for Afforestation of Al-Ani Wild Park in Wadi Hali, Al-Qunfudhah Governorate - Phase One",
          status: "onSchedule",
          percentage: 61.72,
        },
        {
          id: uuidv4(),
          name: "Design of the Ninth and Tenth National Park (Group Two - Phase Two)",
          status: "stumbling",
          percentage: 20.0,
        },
        {
          id: uuidv4(),
          name: "Development of the Ninth and Tenth National Park (Group Two - Phase Two)",
          status: "early",
          percentage: 5.0,
        },
      ],
    },
  };

  return NextResponse.json({
    maxPages: 2,
    projects: request.headers.get("Accept-Language") === "ar" ? paginatedData.ar[page] : paginatedData.en[page],
  });
}
