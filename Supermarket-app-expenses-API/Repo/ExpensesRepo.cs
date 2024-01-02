using CRUDExpense.Model;
using CRUDExpense.Model.Data;
using Dapper;

namespace CRUDExpense.Repo
{
    public class ExpensesRepo : IExpensesRepo
    {
        private readonly DapperDBContext context;
        public ExpensesRepo(DapperDBContext context) {
            this.context = context;
        }
        public async Task<string> Create(Expenses expenses)
        {
            string response = string.Empty;
            string query = "Insert into expense(expense_type, expense_date, expense_amount) values(@expense_type,@expense_date,@expense_amount)";
            var parameters = new DynamicParameters();
            parameters.Add("id", expenses.id,System.Data.DbType.Int32);
            parameters.Add("expense_type", expenses.expense_type, System.Data.DbType.String);

            parameters.Add("expense_date", expenses.expense_date, System.Data.DbType.String);

            parameters.Add("expense_amount", expenses.expense_amount, System.Data.DbType.Int32);

            using (var connectin = this.context.CreateConnection())
            {
               var result =  await connectin.ExecuteAsync(query, parameters);
                if (result > 0)
                {
                    response = "pass";
                }
                else
                {
                    response = "failed";
                } 
            }
            return response;
        }
        public async Task<List<Expenses>> GetAll()
        {
            string query = "Select * From expense";
            using(var connectin=this.context.CreateConnection())
            {
                var explist = await connectin.QueryAsync<Expenses>(query);
                return explist.ToList();
            }
        }
        public async Task<List<Expenses>> GetAllbytype(string type)
        {
            string query = "exec GetExpensesByExpenseType @type";
            using (var connectin = this.context.CreateConnection())
            {
                var explist = await connectin.QueryAsync<Expenses>(query, new {type});
                return explist.ToList();
            }
        }

        public async Task<Expenses> Getbyid(int id)
        {
            string query = "Select * From expense where id=@id";
            using (var connectin = this.context.CreateConnection())
            {
                var explist = await connectin.QueryFirstOrDefaultAsync<Expenses>(query, new {id});
                return explist;
            }
        }
        public async Task<string> Remove(int id)
        {
            string response = string.Empty;
            string query = "Delete From expense where id=@id";
            using (var connectin = this.context.CreateConnection())
            {
                var explist = await connectin.ExecuteAsync(query, new { id });

                if (explist > 0)
                {
                    response = "pass";
                }
                else
                {
                    response = "failed";
                }
            }
            return response;
        }
        public async Task<string> Update(Expenses expenses, int id)
        {
            string response = string.Empty;
            string query = "update expense set expense_type=@expense_type, expense_date=@expense_date, expense_amount=@expense_amount where id=@id";
            var parameters = new DynamicParameters();
            parameters.Add("id", id, System.Data.DbType.Int32);
            parameters.Add("expense_type", expenses.expense_type, System.Data.DbType.String);

            parameters.Add("expense_date", expenses.expense_date, System.Data.DbType.String);

            parameters.Add("expense_amount", expenses.expense_amount, System.Data.DbType.Int32);

            using (var connectin = this.context.CreateConnection())
            {
                var result = await connectin.ExecuteAsync(query, parameters);
                if (result > 0)
                {
                    response = "pass";
                }
                else 
                {
                    response = "failed";
                }
            }
            return response;
        }
    }
}
