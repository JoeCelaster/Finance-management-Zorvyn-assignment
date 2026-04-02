import Record from "../models/Record.js";

/* ===== DASHBOARD SUMMARY ===== */
export const getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    const totalIncome = records
      .filter(r => r.type === "income")
      .reduce((sum, r) => sum + r.amount, 0);

    const totalExpense = records
      .filter(r => r.type === "expense")
      .reduce((sum, r) => sum + r.amount, 0);

    const netBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      netBalance
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};