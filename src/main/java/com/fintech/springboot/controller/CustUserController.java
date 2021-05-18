package com.fintech.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fintech.springboot.dao.dto.CustUser;
import com.fintech.springboot.dao.mybatis.mariadb.custuser.CustUserMapper;

@Controller
public class CustUserController {

	@Autowired
	private CustUserMapper custUserMapper;
	
	@RequestMapping("/custuser/list")
	public ModelAndView list() throws Exception {
		ModelAndView mv = new ModelAndView("thymeleaf/custuser/custUserList");
		List<CustUser> custUserList = custUserMapper.getCustUserList();
		mv.addObject(custUserList);
		return mv;
	}
	
	@RequestMapping("/custuser/detail")
	public ModelAndView detail(String userId) throws Exception {
		ModelAndView mv = new ModelAndView("thymeleaf/custuser/custUserDetail");
		CustUser custUser = custUserMapper.getCustUser(userId);
		mv.addObject(custUser);
		return mv;
	}
	
	@RequestMapping("/custuser/add")
	public ModelAndView add() throws Exception {
		ModelAndView mv = new ModelAndView("thymeleaf/custuser/custUserAdd");
		return mv;
	}
	
	@RequestMapping("/custuser/upd")
	public ModelAndView upd(String userId) throws Exception {
		ModelAndView mv = new ModelAndView("thymeleaf/custuser/custUserUpd");
		CustUser custUser = custUserMapper.getCustUser(userId);
		mv.addObject(custUser);
		return mv;
	}
	
	@RequestMapping("/custuser/proc")
	@ResponseBody
	public String proc(String type, String userId, String mobileNo, String addr) throws Exception {
		CustUser custUser = new CustUser();
		if("A".equals(type)) {
			custUser.setUserId(userId);
			custUser.setMobileNo(mobileNo);
			custUser.setAddr(addr);
			custUserMapper.save(custUser);
		}
		else if("D".equals(type)) {
			custUser.setUserId(userId);
			custUserMapper.delete(userId);
		}
		else if("U".equals(type)) {
			custUser.setUserId(userId);
			custUser.setMobileNo(mobileNo);
			custUser.setAddr(addr);
			custUserMapper.modify(custUser);
		}
		
		return "";
	}
	
}
