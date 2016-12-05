package hu.uni.miskolc.webtech.librarian.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;



@Controller
public class IndexController {

	@RequestMapping(value={"", "/", "/home", "/index"})
	public ModelAndView homePage(){
		ModelAndView result = new ModelAndView("index");
		return result;
	}
	
	@RequestMapping(value={"/create"})
	public ModelAndView createPage(){
		ModelAndView result = new ModelAndView("authorcr");
		return result;
	}
	
	@RequestMapping(value={"/update"})
	public ModelAndView updatePage(){
		ModelAndView result = new ModelAndView("authorup");
		return result;
	}
	
	@RequestMapping(value={"/authorslist"})
	public ModelAndView authorslistPage(){
		ModelAndView result = new ModelAndView("authorslist");
		return result;
	}
	
	@RequestMapping(value={"/booklist"})
	public ModelAndView booklistPage(){
		ModelAndView result = new ModelAndView("booklist");
		return result;
	}
	
	@RequestMapping(value={"/about"})
	public ModelAndView aboutPage(){
		ModelAndView result = new ModelAndView("about");
		return result;
	}

	@RequestMapping("/hello")
	public @ResponseBody String sayHello(){
		return "Hello World";
	}

}