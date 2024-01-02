using CRUDExpense.Model;
using CRUDExpense.Repo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CRUDExpense.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseController : ControllerBase
    {
        private readonly IExpensesRepo repo;
        public ExpenseController(IExpensesRepo repo) {
            this.repo = repo;
        }
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll() {
            var _list=await this.repo.GetAll();
            if (_list != null)
            {
                return Ok(_list);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpGet("GetAllbyType/{type}")]
        public async Task<IActionResult> GetAllbytype(string type)
        {
            var _list = await this.repo.GetAllbytype(type);
            if (_list != null)
            {
                return Ok(_list);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpGet("Getbyid/{id}")]
        public async Task<IActionResult> Getbyid(int id)
        {
            var _list = await this.repo.Getbyid(id);
            if (_list != null)
            {
                return Ok(_list);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] Expenses expenses)
        {
            string response = await this.repo.Create(expenses);

            if (response == "pass")
            {
                // If the expense was successfully created, return a success message
                return Ok("Expense created successfully.");
            }
            else
            {
                // If the expense creation failed, return a bad request message
                return BadRequest("Failed to create the expense.");
            }
        }
        [HttpPut("Update/{id}")]
        public async Task<IActionResult> Update([FromBody] Expenses expenses, int id)
        {
            string response = await this.repo.Update(expenses, id);

            if (response == "pass")
            {
                // If the update was successful, return a success message
                return Ok("Expense updated successfully.");
            }
            else
            {
                // If the update failed, return a bad request message
                return BadRequest("Failed to update the expense.");
            }
        }
        [HttpDelete("Remove/{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            string response = await this.repo.Remove(id);

            if (response == "pass")
            {
                // If the deletion was successful, return a success message
                return Ok("Expense removed successfully.");
            }
            else
            {
                // If the deletion failed, return a bad request message
                return BadRequest("Failed to remove the expense.");
            }
        }
    }
}
