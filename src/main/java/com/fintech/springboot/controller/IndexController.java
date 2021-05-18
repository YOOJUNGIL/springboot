package com.fintech.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.fintech.springboot.dao.dto.Board;

@Controller
public class IndexController {

	@RequestMapping("/index")
	public ModelAndView index() throws Exception {
		ModelAndView mv = new ModelAndView("thymeleaf/index");
		Board board = new Board();
		board.setNo(9);
		board.setTitle("하나더");
		board.setContent("하나더eee");
		board.setRegDt("20210405");
		mv.addObject(board);
		return mv;
	}
	
}
