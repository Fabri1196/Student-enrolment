using Microsoft.AspNetCore.Mvc;
using Domain.Entities;
using Domain.Services;
using FluentValidation;
using Microsoft.AspNetCore.Http;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;

        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet(Name = "GetAll")]
        public ActionResult<IEnumerable<Student>> Get()
        {
            try
            {
                var result = _studentService.GetAllStudents();
                return Ok(result);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Student> Get(int id)
        {
            try
            {
                var result = _studentService.GetStudent(id);
                if (result == null) { return NotFound(); }
                return Ok(result);
            }
            catch
            {
                return StatusCode(500);
            }

        }

        [HttpPost]
        public ActionResult Post([FromBody] Student report)
        {
            try
            {
                _studentService.CreateStudent(report);
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Errors);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPut]
        public ActionResult Put([FromBody] Student report)
        {
            try
            {
                _studentService.UpdateStudent(report);
                return StatusCode(StatusCodes.Status200OK);
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Errors);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                if (_studentService.DeleteStudent(id))
                {
                    return StatusCode(StatusCodes.Status200OK);
                }
                return NotFound();
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}