namespace CRUDExpense.Model
{
    public class Expenses
    {
        public int? id { get; set; }

        public string? expense_type { get; set; }

        public DateTime expense_date { get; set; }

        public int? expense_amount { get; set; }
    }
}
