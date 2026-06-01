"use client";

import { supabase } from "@/lib/supabase";

export default function TestPage() {
  async function testSupabase() {
    const { data, error } = await supabase
      .from("leads")
      .select("*");

    console.log(data);
    console.log(error);
  }

  return (
    <button
      onClick={testSupabase}
      className="rounded bg-red-600 px-4 py-2 text-white"
    >
      Test Supabase
    </button>
  );
}