using CRUDExpense.Model;

namespace CRUDExpense.Repo
{
    public interface IExpensesRepo
    {
        Task<List<Expenses>> GetAll();

        Task<List<Expenses>> GetAllbytype(string expense_type);
        Task<Expenses> Getbyid(int id);

        Task<string> Create(Expenses expenses);

        Task<string> Update(Expenses expenses, int id);

        Task<string> Remove(int id);



    }
}
